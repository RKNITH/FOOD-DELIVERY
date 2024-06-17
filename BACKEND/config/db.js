import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://198038:7070067597@cluster0.mlonpp7.mongodb.net/food-del').then(() => console.log('DB Connected'));

}