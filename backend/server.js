import express from 'express';
import dbConnection from './db/dbConnection.js';
import userRouter from './routes/userRouter.js';
import cors from 'cors'
import contactRouter from './routes/contactRouter.js';
import notesRouter from './routes/notesRouter.js';


const app = express();
app.use(
  cors({
    origin: "https://pronote-notesapp.netlify.app",
    credentials: true,
  })
);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.use('/api/v1/user', userRouter)
app.use('/api/v1/contact', contactRouter)
app.use('/api/v1/notes', notesRouter)

const port = process.env.SERVER_PORT || 8080
app.listen(port, () => {
  console.log(`server started at: http://localhost:${port}`)
})