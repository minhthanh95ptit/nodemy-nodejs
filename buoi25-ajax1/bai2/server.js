const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.post('/', (req, res) =>{
    var number = req.body.number;

    if(Number(number) >= 1){
        if(Number(number) ===1){
            return res.json({
                err: false,
                message: 'Đây là số một.'
            })
        }
        else{
            return res.json({
                err: false,
                message: 'Đây là một số.'
            })
        }
    }
    else if(typeof(number) === 'string'){
        return res.json({
            err: false,
            message: 'Đây là string.'
        })
    }
    else{
        return res.json({
            err: true,
            message: 'ERROR...'
        })
    }
})

app.listen(3001, (req, res) =>{
    console.log("RUNNING...");
})