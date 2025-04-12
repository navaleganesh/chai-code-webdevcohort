import mongoose from "mongoose";

const userSchema = new mongoose.Schema({         // mongoose Schema create karta hai   
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:["user","admin"], // Inhimai se data select karega
        default:"user"
    },
    isVerified :{
        type:Boolean,
        default:false
    },
    verificationToken:{
        type:String
    },
    resetPasswordToken:{
        type:String
    },
    resetPasswordExpires:{
        type:Date
    },
}, 
{
    timestamps: true // createdAt
}
);      
 
const User = mongoose.model("User", userSchema) // mongoose help karega model banane mai

export default User