import express from 'express'
import authentication from '../auth/authentication.js';
import { addNotes, deleteNote, sendNotes, updateNote, verifyPassword } from '../controller/notesController.js';

const notesRouter = express.Router();

notesRouter.get('/', authentication, sendNotes)
notesRouter.post('/add', authentication, addNotes)
notesRouter.post('/verify', authentication, verifyPassword)
notesRouter.delete('/delete/:id', authentication, deleteNote)
notesRouter.put('/update/:id', authentication, updateNote)

export default notesRouter;