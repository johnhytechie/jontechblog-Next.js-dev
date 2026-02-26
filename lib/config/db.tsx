import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://tekinora:ballar86@cluster0.dgxvdyl.mongodb.net/tekinora')
    console.log("DB Connected");
}