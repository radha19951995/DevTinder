const mongoose= require("mongoose");

const connectDB= async()=>{
    await mongoose.connect
    ("mongodb+srv://radhainfy95:IlJrD86PwjXQbvP0@namastenode.1ajqthc.mongodb.net/devTinder")
}
module.exports=connectDB;

