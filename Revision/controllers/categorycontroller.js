const CatModel = require('../models/catmodel')
const dispCat = ((req,res)=>{
    const data = CatModel.find()
    res.render('category',{
        "data":data
    })
})

const addCat = (req,res)=>{
    const {name} = req.body
    const res = new CatModel({
        name:name
    })
    res.save()
    if(res)
        res.redirect('/')
}

module.exports = {addCat,dispCat}