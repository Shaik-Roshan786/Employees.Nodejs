const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Employee = require("../Models/employee")


router.post('/adddata' , async (req,res) => {
    const employee = new Employee(req.body)
    employee.save().then (result => {
        res.status (201).json({
            message:"Employee Data created",
            createdEmployee: employee
        })
    })
    .catch (error => {
        res.status(400).json({Error:error})
    })
    
});
router.get('/employees', async (req,res) =>{ 
    try{         
        const employees = await Employee.find({})  // async makes a function return a Promise
                                                 //await makes a function wait for a Promise
        res.status(200).json({
            Totalemployees : employees.length,   // length of the employees in schema
            employees
        })
    }catch (error) {
        res.status(400).send(error)
    } 
    })

    router.put('/updatedata/:Name',(req,res)=>{
        const empname = req.params.Name; 
        const {Name,Company,Mobile,Email,Salary,Projectname} = req.body;
        Employee.findOneAndUpdate(
            {Name : empname},
            {Name,Company,Mobile,Email,Salary,Projectname},
            {new : true}
        )
        .then((employee)=>{
            if(!employee){
                return res.status(404).json({error:"Employee Data Not found"})
            }
            res.json({message : "Employee Data Updated"});
        })
    
    })

    router.delete('/deletedata/:Name', (req, res) => { // Defined Path and Handler Function
        const empname = req.params.Name; // Passing Parameters to variable 
        Employee.findOneAndDelete({ Name: empname }) // findOneAndDelete helps to Delete
            .then((employee) => { // asynchronous function 
                if (!employee) {
                    return res.status(404).json({ error : "Employee Data Not Found"});
                }
                res.json({message : "Employee Deleted Successfully" });
            })
    });

module.exports=router;
    
