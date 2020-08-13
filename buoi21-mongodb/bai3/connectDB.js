const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/buoi21', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String,
    age: Number,
    email: String,
    address: String,
    school: String
},{
    collection:'User'
})

const AccountModel = mongoose.model('User', AccountSchema);


module.exports = AccountModel