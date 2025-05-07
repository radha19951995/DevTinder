const express= require("express");

const app= express();
// app.use('/user',[RH1,RH2],RH3,RH4)
app.use('/user',
    (req,res,next)=>{
    console.log("handling the route user1 !!")
  /*   res.send("1st response"); */
    next();
},
(req,res,next)=>{
    console.log("handling the route user2 !!")
  /*   res.send("2nd response"); */
    next();
},
(req,res,next)=>{
    console.log("handling the route user3 !!")
   /*  res.send("3rd response"); */
    next();
},
(req,res,next)=>{
    console.log("handling the route user4 !!")
   res.send("4th response"); 
    next();
},

),

app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777...")
})