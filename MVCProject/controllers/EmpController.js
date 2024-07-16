const {dispData,insertData,deleteEmp,editEmp,updData} = require("../models/EmpModel")

const myform = async(req,res)=>{
    let empdata = await dispData()
    let empDetail = ''
    // return res.json("data",empdata)
    res.render('emp',{
        empdata,
        empDetail
    })
} 
const mypostform = async(req,res)=>{
    let insData  = await insertData(req.body);
    console.log(insData);
    res.redirect('/emp/form')    
} 
const deleteData = async(req,res)=>{
    let ans =  await deleteEmp(req.params.id)
    console.log(ans);
    res.redirect('/emp/form')
}  
const editData = async(req,res)=>{
    let empDetail = await editEmp(req.params.id)
    let empdata = await dispData()
    res.render("emp",{
        empdata,
        empDetail
    })
}
const updateData = async(req,res)=>{
    let updData1  = await updData(req.body);
    console.log(updData1);
    res.redirect('/emp/form')
}
module.exports = {
    myform,
    mypostform,
    deleteData,
    editData,
    updateData
   
}
