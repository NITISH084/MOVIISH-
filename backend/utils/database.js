import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const databaseConnection = async() => {
  try{
 await mongoose.connect(process.env.Mongo_url).then(() => {
    console.log('Database connected successfully');
  })}
  catch(error){
    console.error('Database connection error:', error);
  };
};

export default databaseConnection;
