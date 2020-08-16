const mongoose = require('mongoose');


let connectDB = () =>{
    return mongoose.connect('mongodb://localhost/buoi25', {
    useNewUrlParser: true,
    useUnifiedTopology: true})
}


module.exports = connectDB;