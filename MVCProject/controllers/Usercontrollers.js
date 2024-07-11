const {dispData,insertData,deleteUser,editUser,updData} = require("../models/Usermodel")

const myform = async(req,res)=>{
    let userdata = await dispData()
    let userDetail = ''
    res.render('user',{
        userdata,
        userDetail
    })
} 
const mypostform = async(req,res)=>{
    let insData  = await insertData(req.body);
    console.log(insData);
    res.redirect('/user/form')    
} 
const deleteData = async(req,res)=>{
    let ans =  await deleteUser(req.params.id)
    console.log(ans);
    res.redirect('/user/form')
}  
const editData = async(req,res)=>{
    let userDetail = await editUser(req.params.id)
    let userdata = await dispData()
    res.render("user",{
        userdata,
        userDetail
    })
}
const updateData = async(req,res)=>{
    let updData1  = await updData(req.body);
    console.log(updData1);
    res.redirect('/user/form')
}
module.exports = {
    myform,
    mypostform,
    deleteData,
    editData,
    updateData
   
}
