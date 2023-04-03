const express=require("express");
const cors=require("cors");

const userRouter=require("./Routes/User.Route")


const app=express();
app.use(express.json());
app.use(cors({
     origin : "*"
 }))

app.use("/",userRouter)

app.listen(7000,()=>{
  console.log("server is running on port 7000")
})