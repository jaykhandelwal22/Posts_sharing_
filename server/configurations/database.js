import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const databaseURL = process.env.DATABASE_URL;

export const databaseConfiguration = async () => {
  try {
    await mongoose.connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
