const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const AccountModel = require('./connectDB');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res) =>{
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var age = req.body.age;
    var school = req.body.school;

    AccountModel.create({
        username: username,
        password: password,
        email: email,
        age: age,
        school: school
    })
    .then(data =>{
        res.json("DONE");
    })
    .catch(err =>{
        res.json(500).err;
    })
})

app.get('/:username/:password',(req, res) =>{
    var username = req.params.username;
    var password = req.params.password;

    AccountModel.find({
        username: username,
        password: password
    })
    .then(data =>{
        if(data){
           res.json(data) 
        }
        else{
            res.json('Không tìm thấy tài khoản.')
        }
    })
    .catch(err =>{
        res.json(err);
    })
})

app.delete('/:id', (req, res) =>{
    var id = req.params.id;

    AccountModel.deleteOne({
        _id: id
    })
    .then(data =>{
        res.json("DONE");
    })
    .catch(err =>{
        res.json(err);
    })
})

app.get('', (req, res) =>{
    var username = req.params.username;
    AccountModel.find({})
    .limit(3)
    .then(data =>{
        res.json(data)
    })
    .catch(err =>{
        res.json(err)
    })
})

app.listen(3000, (req, res) =>{
    console.log("RUNNING...");
})