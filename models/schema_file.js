const mongoose = require("mongoose");
const userSchema =mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  
});
// create the collection
const User = mongoose.model("user_info", userSchema);
module.exports = User;
