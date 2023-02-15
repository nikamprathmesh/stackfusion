const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const DATABASE = process.env.DATABASE
mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("connection succesfull");
  })
  .catch((err) => {
    console.log(err);
  });
