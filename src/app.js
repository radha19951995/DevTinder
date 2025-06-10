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
app.get("/user",async(req,res)=>{
    const UserEmail = req.body.emailId;
try{
    const users = await User.find({emailId:UserEmail}) 
    if(users.length===0){
        res.status(400).send("user not found")
    }else{
        res.send(users)
    }
 
}catch(err){
    res.status(400).send("something went wrong")
}
})
app.get("/feed",async(req,res)=>{
    
try{
    const users = await User.find({}) 
    res.send(users)
    
 
}catch(err){
    res.status(400).send("something went wrong")
}

})
// delete the user by userid
app.delete("/user",async (req,res)=>{
    const userId= req.body.userId
    try{
         /* const user= await User.findByIdAndDelete({_id:userId}) */
       const user= await User.findByIdAndDelete(userId)  
        res.send("user deleted successfully")
    }catch(err){
        res.status(400).send("Something went wrong")
    }
})
// update the userbyid
app.patch("/user/:userId", async (req,res)=>{
   
    const userId=req.params?.userId;
    const data= req.body;
    console.log(data);
    try{
        const ALLOWED_UPDATES = [
           "photoUrl","skills","about","gender","age","gender"
        ]
        const isUpdateAllowed=Object.keys(data).every((k)=>
                ALLOWED_UPDATES.includes(k)
        )
        if(!isUpdateAllowed){
            throw new Error("update not allowed")
        }
        
        const user= await User.findByIdAndUpdate({_id: userId},data);
        res.send("user updated successfully")
    }
    catch(err){
        res.status(400).send("Update Failed: " +err.message)
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

