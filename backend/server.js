import express from 'express';
import dbConnection from './db/dbConnection.js';
import userRouter from './routes/userRouter.js';
import cors from 'cors'
import contactRouter from './routes/contactRouter.js';
import notesRouter from './routes/notesRouter.js';


const app = express();
app.use(cors())
app.use(express.json())

dbConnection();

app.use('/api/v1/user', userRouter)
app.use('/api/v1/contact', contactRouter)
app.use('/api/v1/notes', notesRouter)

const port = '8080'
app.listen(port, () => {
  console.log(`server started at: http://localhost:${port}/`)
})