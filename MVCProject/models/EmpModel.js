const mongoose = require("mongoose");
const {ObjectId} = require('mongodb')
mongoose.connect("mongodb://localhost:27017/empdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

 const EmpSchema = {
    name:String,
    email: String,
    password: String
 }

 const EmpModel= mongoose.model('Emp',EmpSchema) 

 const dispData = async()=>{
    const findResult = await EmpModel.find({})
    return findResult;
} 

const insertData = async(data)=>{
     const findResult = await EmpModel.create(data)
    return findResult;
}
const deleteEmp = async(id)=>{
    const findResult = await EmpModel.findByIdAndDelete(new ObjectId(id));
    return findResult;
}
const editEmp = async(id)=>{
    const findResult = await EmpModel.findById(new ObjectId(id));
    console.log(findResult);
    return findResult;

}
const updData = async(data)=>{
    const findResult = await EmpModel.findByIdAndUpdate(
        {_id:new ObjectId(data.id)},
        { $set : data}
    );
    return findResult;
}
module.exports = {EmpModel,dispData,insertData,deleteEmp,editEmp,updData}
