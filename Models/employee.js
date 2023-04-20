const mongoose = require('mongoose');
const Employee = mongoose.model(
    "Employee",
    new mongoose.Schema({
      Firstname: { type: String, required: true },
      Lastname: { type: String, required: true },
      Email: { type: String, required: true },
      mobile:{type:String,required : true},
      Location:{type:String,required : true},
      Company :{type:String,required : true}
    })
  );

  module.exports = Employee;