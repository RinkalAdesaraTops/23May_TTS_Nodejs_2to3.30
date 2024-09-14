const SubcatModel = require('../models/subcategorymodel')
const addsubcat = async(req,res)=>{
    const {name,category} = req.body
    var subcat = new SubcatModel({
        name: name,
        category:category
      });
      
    subcat.save();
    return res.status(200).send({"msg":"Inserted Successfully"})
   
}

const deletesubcat = async(req,res)=>{
    const id = req.params.id
    const result = await SubcatModel.findByIdAndDelete(id)
    if(result){
        return res.status(200).send({"msg":"Deleted Successfully"})
    } else {
        return res.status(301).send({"msg":"Error"})

    }
}

const displaysubcat = async(req,res)=>{
    const result = await SubcatModel.find()
   
    if(result){
        return res.status(200).send({result})
    } else {
        return res.status(301).send({"msg":"Error"})
    }
}

const editsubcat = async(req,res)=>{
    let id = req.params.id
    const result = await SubcatModel.findById(id)
    if(result){
        return res.status(200).send({"data":result})
    } else {
        return res.status(301).send({"msg":"Error"})
    }
}

const updatesubcat = async(req,res)=>{
    const {name} = req.body
    const id = req.params.id
    const result = await SubcatModel.findByIdAndUpdate(id,{name})
    let finalData = await SubcatModel.find()
    if(result){
        return res.status(200).send({"data":finalData})
    } else {
        return res.status(301).send({"msg":"Error"})
    }
}
module.exports = {addsubcat,updatesubcat,deletesubcat,editsubcat,displaysubcat}