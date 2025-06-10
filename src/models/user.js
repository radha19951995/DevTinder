const mongoose= require("mongoose");
const validator= require("validator")
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
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(("Email not valid"+ value));
                
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error(("password is  not valid" + value));
                
            }
        }
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