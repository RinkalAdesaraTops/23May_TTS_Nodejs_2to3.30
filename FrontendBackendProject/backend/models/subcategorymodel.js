const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/finalprojectdb')
  .then(() => console.log('Connected!'));

  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;
  
  const Subcategory = new Schema({
    subcatid: ObjectId,
    name: String,
    category: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
     }]
  });

const SubcatModel = mongoose.model('Subcategory', Subcategory);
module.exports = SubcatModel



