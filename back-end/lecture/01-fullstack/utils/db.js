import mongoose from 'mongoose'; // const mongoose = require('mongoose');
import dotenv from 'dotenv'     
dotenv.config()


// export a function that connects to db

const db = () => {

    mongoose
    .connect(process.env.MONGO_URL)   // mongoose.connect('mongodb://127.0.0.1:27017/test');
    .then(() => {
        console.log("Connected to mongodb");
    })
    .catch(() => {
        console.log("Error connecting to mongodb");

    })
}

export default db;