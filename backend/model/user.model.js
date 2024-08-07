import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
       

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
       
    }
})


export default mongoose.model("User",UserSchema);