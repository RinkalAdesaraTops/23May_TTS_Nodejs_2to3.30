const {MongoClient, ObjectId} = require('mongodb')

const client = new MongoClient("mongodb://localhost:27017/")
const dbname = "empdb";
let db;
const main = async()=>{
    await client.connect();
    console.log('Connected successfully to server');
   db = client.db(dbname);
    
}
main()

const dispData = async()=>{
    const collection = db.collection('emp');
    const findResult = await collection.find({}).toArray();
    return findResult;
} 

const insertData = async(data)=>{
    const collection = db.collection('emp');
    const findResult = await collection.insertOne(data);
    return findResult;
}
const deleteUser = async(id)=>{
    const collection = db.collection('emp');
    const findResult = await collection.deleteOne({_id:new ObjectId(id)});
    return findResult;
}
const editUser = async(id)=>{
    const collection = db.collection('emp');
    const findResult = await collection.find({_id:new ObjectId(id)}).toArray();
    console.log(findResult);
    return findResult[0];

}
const updData = async(data)=>{
    console.log(data);
    const collection = db.collection('emp');
    const findResult = await collection.updateOne(
        {_id:new ObjectId(data.id)},
        { $set : data}
    );
    return findResult;
}
module.exports = {dispData,insertData,deleteUser,editUser,updData}
