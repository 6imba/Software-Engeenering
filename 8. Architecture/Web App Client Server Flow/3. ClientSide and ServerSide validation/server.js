const mongooseObj = require("mongoose")
mongooseObj.connect("mongodb://localhost:27017/validationDB")
const userModelSchemaObj = new mongooseObj.Schema({
    username: {
      type: String,
      required: true,
    }
  });
const UserClass = new mongooseObj.model("productCollection", userModelSchemaObj);

const express = require('express')
const server = express()
server.use(express.urlencoded({extended: false}));// get form data
server.set("view engine", "ejs") // set view engine

server.get('/', (req, res) =>{
    res.render("index")
})

server.post('/post', async (req, res) => {
    if(req.body.naam.match(/[^a-zA-Z0-9]/) == null){
        const userObj = new UserClass({
            username: req.body.naam
        });
        await userObj.save();
        console.log("User Added! : Server-Side calidation.");
        res.redirect("/");
    }else{
        console.log("Invalid UserName! : Server-Side calidation.")
        res.redirect("/");
    }
})

server.listen(8011);