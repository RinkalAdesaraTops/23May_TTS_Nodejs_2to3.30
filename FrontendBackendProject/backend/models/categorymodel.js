const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/finalprojectdb')
  .then(() => console.log('Connected!'));

  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;
  
  const Category = new Schema({
    catid: ObjectId,
    name: String
  });

const CatModel = mongoose.model('Category', Category);
module.exports = CatModel



