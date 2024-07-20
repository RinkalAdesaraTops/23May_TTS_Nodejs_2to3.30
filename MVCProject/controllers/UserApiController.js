const {dispData,insertData,deleteUser,editUser,updData} = require("../models/Usermodel")

const myform = async(req,res)=>{
    let userdata = await dispData()
    return res.status(200).json({
        data:userdata,
        msg:"Successfully get data..!!"
    })
}

const mypostform = async(req,res)=>{
    let insData  = await insertData(req.body);
    if(insData){
        return res.status(200).json({
            msg:"Successfully Inserted..!!"
        })
    }
    else {
        return res.status(304).json({msg:"Something went wrong..."})
    }

} 
const deleteData = async(req,res)=>{
    let ans =  await deleteUser(req.params.id)
    console.log(ans);
    return res.status(200).json({msg:"successfully deleted.."})
}
const editData = async(req,res)=>{
    let userDetail = await editUser(req.params.id)
    return res.status(200).json({data:userDetail})
}
const updateData = async(req,res)=>{
    let updData1  = await updData(req.body);
    return res.status(200).json({msg:"successfully updated.."})
    
}
module.exports = {
    myform,
    mypostform,
    deleteData,
    editData,
    updateData
   
}