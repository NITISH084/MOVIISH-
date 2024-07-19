import mongoose from 'mongoose';

const databaseConnection = async() => {
  try{
 await mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Database connected successfully');
  })}
  catch(error){
    console.error('Database connection error:', error);
  };
};

export default databaseConnection;
