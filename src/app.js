const express= require("express");

const app= express();
//this will only handle get method of API call to /user
app.get('/user',(req,res)=>{
    res.send({firstname:"Radha",Lasetname:"Kumari"})
})
//this will only handle post method of API call to user
app.post('/user',(req,res)=>{
    res.send("data successfully saved in the database")
    console.log("data successfully saved in the database")
})
//this will handle delete api call to /user

app.delete('/user',(req,res)=>{
    res.send("deleted successfully")
})
//this will match all the https methods API call to /hello
app.use("/hello", (req,res)=>{
    res.send("Hello from hello server..");
})
app.use("/test", (req,res)=>{
    res.send("Hello from test server..");
})
// app.use("/", (req,res)=>{
//     res.send("Hello from server"); //order matters here
// })
app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777...")
})