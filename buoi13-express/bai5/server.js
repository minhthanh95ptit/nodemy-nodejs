const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var obj = { name : " nodemy "}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/obj', (req, res, next) =>{
    res.json(obj);
 })

//a) tạo api hiển thị toàn bộ thuộc tính của obj
app.get('/', (req, res, next) =>{
    for(var i in obj){
        res.json(i);
    }
})

//b) tạo api hiển thị giá trị thuộc tính của obj theo key
app.get('/:key', (req, res, next) =>{
    var key = req.params.key;
    res.json(obj[key]);
})



//c) Tạo 1 api thêm mới 1 thuộc tính vào obj. ví dụ là sau khi thêm obj có dạng { name:"nodemy", age: 20};
app.post('/', (req, res, next) =>{
    var key = req.body.key;
    var value = req.body.value;

    obj[key] = value;
    res.json(obj);
})

app.put('/:key', (req, res, next) =>{
    var key = req.params.key;
    var value = req.body.value;

    if(!key){
        res.json("Không tồn tại thuộc tính này")
    }
    else{
        obj[key] = value;
        res.json("Cập nhật thành công")
    }
})

app.delete('/:key', (req, res) =>{
    var key = req.params.key;
    if(obj[key]){
        delete obj[key]
        res.json("Đã xóa xong")
    }
    else{
        res.json("Key không tồn tại trong Object")
    }
})

app.listen(3000 ,(req, res) =>{
    console.log("RUNNING...")
})