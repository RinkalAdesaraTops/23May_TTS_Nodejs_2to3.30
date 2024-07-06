const {dispData,insertData,deleteUser} = require("../models/Usermodel")

const myform = async(req,res)=>{
    let userdata = await dispData()
    res.render('user',{
        userdata
    })
} 
// const getData = async(req,res)=>{
//     let userdata = await dispData()
//     res.render('user',userdata)

// }  

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
module.exports = {
    myform,
    mypostform,
    deleteData
   
}
