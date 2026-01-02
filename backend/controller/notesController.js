import NOTES from "../model/noteModel.js";
import USER from "../model/userModel.js";
import bcrypt from 'bcrypt'

async function sendNotes(req, res) {
  try {
    const userId = req.userId;
    const notes = await NOTES.find({ user: userId });
    return res.status(200).json({ success: true, message: "note fetched successfully!", notes: notes || [] })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || "Server side error." })
  }
}

async function verifyPassword(req, res) {
  try {
    const userId = req.userId;
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ success: false, message: "Password field must not be empty!" })
    }
    const user = await USER.findById(userId);
    const verifyPass = await bcrypt.compare(password, user.password);
    if (!verifyPass) {
      return res.status(400).json({ success: false, message: "Password is wrong!" })
    }
    return res.status(200).json({ success: true, message: "Password verified successfully!" })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || "Server side error." })
  }
}

async function addNotes(req, res) {
  try {
    const userid = req.userId;
    const { title, description, category } = req.body;
    if (!title || !description) {
      return res.status(400).json({ success: false, message: "All fields are required!" })
    }
    await NOTES.create({ user: userid, title, description, category: category || "" });
    return res.status(200).json({
      success: true,
      message: "Note added!",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || "Server side error." })
  }
}

async function updateNote(req, res) {
  try {
    const noteId = req.params.id;
    const userId = req.userId;
    const { title, description, category } = req.body;
    if (!title || !description) {
      return res.status(400).json({ success: false, message: "All fields are required!" })
    }
    const updatedNote = await NOTES.findByIdAndUpdate(noteId, { title, description, category: category || "" });
    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }
    return res.status(200).json({ success: true, message: "Note updated successfully." })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || "Server side error." })
  }
}

async function deleteNote(req, res) {
  try {
    const noteId = req.params.id;
    const note = await NOTES.findByIdAndDelete(noteId);
    return res.status(200).json({
      success: true,
      message: "Note deleted!",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || "Server side error." })
  }
}

export { sendNotes, addNotes, verifyPassword, deleteNote, updateNote }