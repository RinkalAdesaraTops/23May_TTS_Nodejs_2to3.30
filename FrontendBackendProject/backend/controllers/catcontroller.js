const CatModel = require('../models/categorymodel')
const addCat = async(req,res)=>{
    const {name} = req.body
    var cat = new CatModel({
        name: name
      });
      
    cat.save();
    return res.status(200).send({"msg":"Inserted Successfully"})
   
}

const deleteCat = async(req,res)=>{
    const id = req.params.id
    const result = await CatModel.findByIdAndDelete(id)
    if(result){
        return res.status(200).send({"msg":"Deleted Successfully"})
    } else {
        return res.status(301).send({"msg":"Error"})

    }
}

const displayCat = async(req,res)=>{
    const result = await CatModel.find()
    req.flash('info',"Category get successfully")
    if(result){
        return res.status(200).send({
            "data":result,
            "msg":req.flash('info')

        })
    } else {
        return res.status(301).send({"msg":"Error"})
    }
}

const editCat = async(req,res)=>{
    let id = req.params.id
    const result = await CatModel.findById(id)
    if(result){
        return res.status(200).send({"data":result})
    } else {
        return res.status(301).send({"msg":"Error"})
    }
}

const updateCat = async(req,res)=>{
    const {name} = req.body
    const id = req.params.id
    const result = await CatModel.findByIdAndUpdate(id,{name})
    let finalData = await CatModel.find()
    if(result){
        return res.status(200).send({"data":finalData})
    } else {
        return res.status(301).send({"msg":"Error"})
    }
}
module.exports = {addCat,updateCat,deleteCat,editCat,displayCat}