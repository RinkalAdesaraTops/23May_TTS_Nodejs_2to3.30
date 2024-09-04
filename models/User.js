const mongoose = require('mongoose');
const main = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
        .then(() => console.log('Connected!'));
}
main()

const userSchema = new mongoose.Schema({
 username: { type: String, unique: true, required: true },
 password: { type: String, required: true },
 });
module.exports = mongoose.model('User', userSchema);