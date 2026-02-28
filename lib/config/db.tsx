// lib/config/db.ts
import mongoose from "mongoose";

let isConnected = false; // track connection across hot reloads

export const connectDB = async () => {
  if (isConnected) {
    console.log("DB already connected");
    return;
  }

  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb+srv://tekinora:ballar86@cluster0.dgxvdyl.mongodb.net/tekinora"
    );
    isConnected = true;
    console.log("DB Connected");
  } catch (err) {
    console.error("DB connection error:", err);
    throw err;
  }
};