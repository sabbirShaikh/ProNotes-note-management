import { config } from 'dotenv'
import mongoose from 'mongoose'
config()

export default async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to database successfully.');
  } catch (error) {
    console.log(error.message || 'database connection failed.')
  }
}