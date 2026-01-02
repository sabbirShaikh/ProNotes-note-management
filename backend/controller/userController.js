import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import USER from '../model/userModel.js'


async function userDetails(req, res) {
  try {
    const userId = req.userId;
    const user = await USER.findOne({ _id: userId }, { password: 0 })
    return res.status(200).json({ success: true, user })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || "Server side error." })
  }
}

async function userSignup(req, res) {
  try {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
      return res.status(401).json({ success: false, message: "All inout fields are required!" })
    }
    const exist = await USER.findOne({ email });
    if (exist) {
      return res.status(409).json({ success: false, message: "With this email user is already exist!" })
    }
    const hashPassword = await bcrypt.hash(password, 10);
    USER.create({ name, email, password: hashPassword });
    return res.status(201).json({ success: true, message: "User account is created successfully" })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || "Server side error." })
  }
}
async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All inout fields are required!" })
    }
    const isUser = await USER.findOne({ email });
    if (!isUser) {
      return res.status(400).json({ success: false, message: "Invalid email!" })
    }
    const verifyPassword = await bcrypt.compare(password, isUser.password);
    if (!verifyPassword) {
      return res.status(409).json({ success: false, message: "Invalid password!" })
    }
    const token = jwt.sign({ id: isUser._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    return res.status(200).json({ success: true, message: 'You are logged in successfully!', token })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || "Server side error." })
  }
}

async function changePassword(req, res) {
  try {
    const { password, newPassword } = req.body;
    if (!password || !newPassword) {
      return res.status(401).json({ success: false, message: "All input fields are required!" })
    }
    const userId = req.userId;
    const user = await USER.findOne({ _id: userId })
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      return res.status(400).json({ success: false, message: "Old password is not corrected!" })
    }
    const hashPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashPassword;
    await user.save();
    return res.status(200).json({ success: true, message: "Password has been changed successfully!" })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || "Server side error." })
  }
}

async function changeEmail(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(401).json({ success: false, message: "All inout fields are required!" })
    }
    const userId = req.userId;
    const user = await USER.findOne({ _id: userId })
    user.email = email;
    await user.save();
    return res.status(200).json({ success: true, message: "Email address has been changed successfully!" })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || "Server side error." })
  }
}

async function deleteUserAcc(req, res) {
  try {
    const userId = req.userId;
    await USER.findByIdAndDelete(userId);
    return res.status(200).json({ success: true, message: "Account deleted successfully!" })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || "Server side error." })
  }
}

export { userSignup, userLogin, userDetails, changePassword, changeEmail, deleteUserAcc };