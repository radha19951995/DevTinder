const express= require("express");
const {adminAuth,userAuth}= require('./middleware/auth')
const app= express();
app.use('/admin',adminAuth)

app.post('/user/login',(req,res)=>{
    res.send("user logged in successfully")
})
app.get('/user',userAuth, (req,res)=>{
    res.send("user data sent")
})
app.get('/admin/getAllData',(req,res)=>{
    res.send("All data sent")
})
app.get('/admin/deleteUser',(req,res)=>{
    res.send("user deleted")
})


app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777...")
})