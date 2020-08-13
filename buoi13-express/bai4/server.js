const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const e = require('express');

var array =[{
    id:1,
    name:"Phong",
    password:"1",
    address:"HN"	
},{
    id:2,
    name:"Sang",
    password:"1",
    address:"HP"	
},
{
    id:3,
    name:"Tan",
    password:"1",
    address:"Bắc Ninh"	
},
{
    id:4,
    name:"Dũng",
    password:"1",
    address:"TQ"	
},
{
    id:5,
    name:"Phong",
    password:"1",
    address:"HN"	
},{
    id:6,
    name:"Sang",
    password:"1",
    address:"HP"	
},
{
    id:7,
    name:"Tan",
    password:"1",
    address:"Bắc Ninh"	
},
{
    id:8,
    name:"Dũng",
    password:"1",
    address:"TQ"	
},
{
    id:9,
    name:"Phong",
    password:"1",
    address:"HN"	
},{
    id:10,
    name:"Sang",
    password:"1",
    address:"HP"	
},
{
    id:11,
    name:"Tan",
    password:"1",
    address:"Bắc Ninh"	
},
{
    id:12,
    name:"Dũng",
    password:"1",
    address:"TQ"	
},
{
    id:13,
    name:"Phong",
    password:"1",
    address:"HN"	
},{
    id:14,
    name:"Sang",
    password:"1",
    address:"HP"	
},
{
    id:15,
    name:"Tan",
    password:"1",
    address:"Bắc Ninh"	
},
{
    id:16,
    name:"Dũng",
    password:"1",
    address:"TQ"	
},
{
    id:17,
    name:"Phong",
    password:"1",
    address:"HN"	
},{
    id:18,
    name:"Sang",
    password:"1",
    address:"HP"	
},
{
    id:19,
    name:"Tan",
    password:"1",
    address:"Bắc Ninh"	
},
{
    id:20,
    name:"Dũng",
    password:"1",
    address:"TQ"	
},
{
    id:21,
    name:"Phong",
    password:"1",
    address:"HN"	
},{
    id:22,
    name:"Sang",
    password:"1",
    address:"HP"	
},
{
    id:23,
    name:"Tan",
    password:"1",
    address:"Bắc Ninh"	
},
{
    id:24,
    name:"Dũng",
    password:"1",
    address:"TQ"	
},
]

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res, next) =>{
    var page = parseInt(req.query.page);
    var PAGE_SIZE = 5;
    
    var start = (page - 1) * PAGE_SIZE;
    var end = start + PAGE_SIZE;
    console.log(page);
    console.log(start);
    console.log(array);

    console.log(array.slice(start, end));
    res.json(array.slice(start, end))

})

app.get('/:id', (req, res, next) =>{
    var id = Number(req.params.id) - 1;
    res.json(array[id])
})


app.post('/login', (req, res, next) =>{
    var username = req.body.username;
    var password = req.body.password;
    var count = 0;
    var account = array[i];

    for(var i = 0; i < array.length; i++){
        var account = array[i];
        if(account.name === username && account.password === password){
            count++;
            res.json("Đăng nhập thành công");
            break;
        }
    }
    console.log(count);
    if(count === 0){
        res.json("Đăng nhập thất bại");
    }
})

app.post('/', (req, res, next) =>{
    var id = Number(req.body.id);
    array.push(req.body);
    res.json(array)
})

app.put('/:id', (req, res, next) =>{
    var id = Number(req.params.id);
    var name = req.body.name;
    var password = req.body.password;
    var address = req.body.address;

    if(id){
        array[id - 1].name = name;
        array[id - 1].password = password;
        array[id - 1].address = address;
    }
    else{
        res.json("ERROR...")
    }
    res.json(array);
})

app.delete('/:id', (req, res, next) =>{
    var id = Number(req.params.id);
    
    if(id){
        if(id - 1 < -1){
            array.splice(id - 1, 1);
            res.json(array); 
        }
        else{
            res.json("Không tồn tại đối tượng có id đó")
        }
    }
    else{
        res.json("ERROR...")
    }
    
})




app.listen("3000", (req, res) =>{
    console.log("RUNNING... ")
})
