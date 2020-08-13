const express = require('express');
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var array = [
    {
        id: 1,
        username: 'kid1412ubqn',
        password: '123456'
    },
    {
        id: 2,
        username: 'kid1412ubqn2',
        password: '123456'
    },
    {
        id: 3,
        username: 'kid1412ubqn3',
        password: '123456'
    },
    {
        id: 4,
        username: 'kid1412ubqn4',
        password: '123456'
    },
    {
        id: 5,
        username: 'kid1412ubqn5',
        password: '123456'
    },
]


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'form.html'));
})

app.post('/', (req, res) =>{
    var username = req.body.username;
    var password = req.body.password;
    var count = 0;

   for(var i = 0; i < array.length; i++){

       if(array[i].username === username && array[i].password === password){
           count++;
       }
   }

      if(count === 0){
       res.json("Đăng nhập thất bại")
   }
   else{
       res.json("Đăng nhập thành công")
   }
   
})

app.listen(3000, (req, res) =>{
    console.log("Running...")
})