const express= require("express");

const app= express();
// app.use('/user',[RH1,RH2],RH3,RH4)
app.use('/user',
    (req,res,next)=>{
   
   /* res.send("handling/Route");  */
    next();
})
app.get('/user',(req,res,next)=>{
    console.log("1st response")
  /*   res.send("handling 1st route") */
  next();
},
(req,res,next)=>{
    console.log("2nd response");
    next()
},
(req,res,next)=>{
    res.send("handling 2nd route response");
}
)
app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777...")
})