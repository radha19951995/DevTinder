const express= require("express");
const connectDB = require("./config/database");
const app= express();
const User= require('./models/user')

app.post('/signup',async(req,res)=>{
    const User= new User({
        firstName:"Radhika",
        lastName:"Kumari",
        emailId:"radhika8252@gmail.com",
        password:12345453,
        gender:"Female"

    })
    try{
        await User.save();
        res.send("user added successfully")
    }
    catch(err){
        res.status(400).send("Error saving the user:"+ err.message)
    }
   
})



connectDB()
.then(()=>{
    console.log("database connection stablished");
    app.listen(7777,()=>{
        console.log("server is successfully listening on port 7777...")
    })

}).catch((err)=>{
    console.log("database is not connected")
})

