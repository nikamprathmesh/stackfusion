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
const User = mongoose.model("user_info", userSchema);
module.exports = User;
