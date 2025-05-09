const express= require("express");
const connectDB = require("./config/database");
const app= express();
const User= require('./models/user')
// Middleware express need to used here 
app.use(express.json());
app.post('/signup',async(req,res)=>{
    /* console.log(req.body); */
    // creating a new instance of User model
    const user= new User(req.body)
    try{
        await user.save();
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

