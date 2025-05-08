const mongoose= require("mongoose");

const UserSchema= new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:Number
    },
    gender:{
        type:String
    }
})
module.exports= mongoose.model("User",UserSchema)