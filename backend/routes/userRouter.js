import express from 'express'
import { changeEmail, changePassword, deleteUserAcc, userDetails, userLogin, userSignup } from '../controller/userController.js';
import authentication from '../auth/authentication.js';

const userRouter = express.Router();

userRouter.get('/', authentication, userDetails)
userRouter.post('/signup', userSignup);
userRouter.post('/login', userLogin);
userRouter.put('/pschange', authentication, changePassword);
userRouter.put('/emailchange', authentication, changeEmail);
userRouter.delete('/deleteacc', authentication, deleteUserAcc)


export default userRouter;