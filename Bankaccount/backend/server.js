const express = require('express')
const { connection } = require('./Config/db')
const cors=require("cors")
const accountRouter =require("./Routes/Account.Route")


const app=express();

app.use(express.json());
app.use(cors({
     origin:"*"
}))

app.use('/account',accountRouter)

app.listen(5000,async(req,res)=>{
     try{
         await connection
         console.log("Connected to db")
     }catch(err){
         console.log(err)
     }
     console.log(`Running on port 5000`)
 })