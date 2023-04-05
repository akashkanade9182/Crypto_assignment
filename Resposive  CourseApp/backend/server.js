const express=require("express")
const cors = require("cors")

const connection=require("./Config/db")
const CourseRoute=require("./Routes/Couse.route")

const app=express();
app.use(express.json());
app.use(cors({
     origin : "*"
 }))

 app.use("/getcourse",CourseRoute);

 app.listen(7000,async()=>{
     try{
     await connection;
     console.log("server running on port 7001")
     
     }
     catch{
        console.log("error in server connection")
     }
    })