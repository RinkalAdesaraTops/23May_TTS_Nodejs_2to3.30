const {MongoClient} = require('mongodb')

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
    return findResult
} 
module.exports = dispData
