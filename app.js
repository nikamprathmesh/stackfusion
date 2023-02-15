const dotenv  = require("dotenv");
const express= require("express");
const path = require('path');
const app = express();
const PORT =process.env.PORT||  5000;
var cors = require('cors');
app.use(cors());
app.use(express.json());
const User = require("./models/schema");
require("./db/conn");
// require("../client/public/index.html")
app.use(express.static(path.join(__dirname,"../client/build")));

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"../client/public/index.html"));
})
app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
  });

app.get('/',(req,res)=>{
  res.send("Helllo from server side");
})
app.get('/userdata',(req,res)=>{
    User.find({}).then((x)=>{
      console.log(x);
      res.send(x);
    }).catch((err)=>{ 
      console.log(err);
    })

})
app.post('/submitform',async(req,res)=>{
    const {name,dob,email,number} = req.body;
    
    try {
        const userdata = new User({
          name,
          dob,  
          email,
          number
        });
        const response = await userdata.save();
        if (response) { 
          res.status(201).json({ message: "User succesfully registered" });
          console.log("registration completed succesfull");
        } else {
          console.log("registration not completed");
          return res.status(422).json({
            error: "some problem is there user not able to complete registration",
          });
          
        }
      } catch (error) {
        return console.log(error);
      }
  })