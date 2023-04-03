const express = require("express")
const fs = require("fs");


const userRouter = express.Router();

userRouter.get("/users", (req, res) => {

     try {
          const data = fs.readFileSync("db.json", "utf-8");
          const parse_data = JSON.parse(data);
          console.log(parse_data)

          return res.status(200).send(parse_data)
     }
     catch {
          return res.status(400).send("error in getting users")
     }



})


userRouter.post("/users", (req, res) => {
     const user = req.body;
try{
     const data = fs.readFileSync("db.json", "utf-8");
     const parse_data = JSON.parse(data);
     const currentDate = new Date()
     const day = currentDate.getDate().toString().padStart(2, '0')
     const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
     const year = currentDate.getFullYear().toString()
     const formattedDate = `${day}/${month}/${year}`
     user.id = parse_data.length + 1;
     user.createdOn = formattedDate;
     user.modifiedOn = formattedDate;
     parse_data.push(user);
     const new_data = JSON.stringify(parse_data);
     fs.writeFileSync("db.json", new_data)
     return res.status(200).send("user added successfully")
}
catch{
     return res.status(400).send("error in adding  user")

}

  


})


userRouter.put("/users/:id", (req, res) => {
    try{
     const payload = req.body;
     const Id = req.params.id
     const data = fs.readFileSync("db.json", "utf-8");
     const parse_data = JSON.parse(data);
     const currentDate = new Date()
     const day = currentDate.getDate().toString().padStart(2, '0')
     const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
     const year = currentDate.getFullYear().toString()
     const formattedDate = `${day}/${month}/${year}`
     const user = parse_data.filter((ele) => ele.id == Id)
     const filter_user = parse_data.filter((ele) => ele.id != Id)

     payload.id=user[0].id;
     payload.createdOn=user[0].createdOn
     payload.modifiedOn=formattedDate;
     console.log(payload)
     filter_user.push(payload)
     const new_data = JSON.stringify(filter_user);
     fs.writeFileSync("db.json", new_data)
     res.status(200).send(payload)
    }
    catch{
     return res.status(400).send("error in updating  user data")

    }

})


userRouter.delete("/users/:id", (req, res) => {
     const Id = req.params.id
     try {
          const data = fs.readFileSync("db.json", "utf-8");
          const parse_data = JSON.parse(data);
          const filter_data = parse_data.filter((ele) => ele.id != Id);
          const newData = JSON.stringify(filter_data)
          fs.writeFileSync("db.json", newData);
          res.status(200).send("user deleted successfully")
     }
     catch {
          return res.status(400).send("error in adding  user")
     }

})




module.exports = userRouter;