const express = require('express');
const path = require('path');

const app = express();
const connectDB = require('./config/connectDB');
connectDB();

const UserModel = require('./models/UserModel');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())


app.get('/', (req, res) =>{
    
    userModel.find({})
    .then(data =>{
       res.json(data);
    })
    .catch(err =>{
        res.json(err);
    })
    
})

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.post('/login', (req, res) =>{
    var username = req.body.username;
    var password = req.body.password;

    UserModel.find({
        username: username,
        password: password
    })
    .then(data =>{
        if(!data.length){
            return res.json({
                err: true,
                message: 'Sai tài khoản hoặc mật khẩu'
            })
        }
        else{
            return res.json({
                err: false,
                message: 'Đăng nhập thành công'
            })
        }
    })
    .catch(err =>{
        return res.json({
            message: 'Lỗi server'
        })
    })
})

app.listen(3000, (req, res) =>{
    console.log("RUNNING...")
})