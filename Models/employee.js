const mongoose = require('mongoose');
const Employee = mongoose.model(
    "Employee",
    new mongoose.Schema({
      Name: { type: String, required: true },
      Email: { type: String, required: true },
      Mobile:{type:String,required : true},
      Company :{type:String,required : true},
      Salary:{type:String,required : true},
      Projectname:{type:String,required : true},
    })
  );

  module.exports = Employee;