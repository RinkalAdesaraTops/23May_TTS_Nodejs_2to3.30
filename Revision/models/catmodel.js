const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/revisiondb")
    .then(()=>console.log('Connected to DB')
)
// if(res) console.log("Db connected")
const catSchema =new mongoose.Schema({
    name:String
})

const CatModel = mongoose.model("Category",catSchema)
module.exports = CatModel