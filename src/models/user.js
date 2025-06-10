const mongoose= require("mongoose");

const UserSchema= new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:Number,
        required:true,
    },
    gender:{
        type:String
    },
    photourl:{
        type:String,
        default:"https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-1024.png",
    },
    age:{
        type:Number,
    },
    skills:{
        type:Array
    }
})
module.exports= mongoose.model("User",UserSchema)