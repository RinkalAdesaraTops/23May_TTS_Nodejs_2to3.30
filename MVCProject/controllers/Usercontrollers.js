const dispData = require("../models/Usermodel")
const myform = (req,res)=>{
    res.render('user')
} 
const getData = async(req,res)=>{
    let userdata = await dispData()
    console.log(userdata);
    res.end("hdsfgjh")
}  

const mypostform = (req,res)=>{
    console.log(req.body);
    //database insert
    console.log('form submit...');
}   
module.exports = {
    myform,
    mypostform,
    getData
}
