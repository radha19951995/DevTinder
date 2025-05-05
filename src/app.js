const express= require("express");

const app= express();

app.use("/hello", (req,res)=>{
    res.send("Hello from hello server..");
})
app.use("/test", (req,res)=>{
    res.send("Hello from test server..");
})
app.use("/", (req,res)=>{
    res.send("Hello from server");
})
app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777...")
})