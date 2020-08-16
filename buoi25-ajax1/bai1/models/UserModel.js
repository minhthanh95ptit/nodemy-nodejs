const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: String,
    password: String
},{
    collection: 'User'
})

module.exports = mongoose.model('User', UserSchema);