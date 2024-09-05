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

const displayCat = (req,res)=>{
    res.send("Display Category")
}

const editCat = (req,res)=>{
    res.send("Edit Category")
}

const updateCat = (req,res)=>{
    res.send("Update Category")
}
module.exports = {addCat,updateCat,deleteCat,editCat,displayCat}