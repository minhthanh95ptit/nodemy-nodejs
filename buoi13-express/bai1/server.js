const express = require('express');
const app = express();
const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/',(req, res) =>{
    res.json("HAHHA");
})

app.get('/login',(req, res) =>{
    res.sendFile(path.join(__dirname,'login.html'))
})

app.get('/download', (req, res) => {
    res.download(path.join(__dirname, 'public/images/anh1.jpg'), () =>{
        console.log("DONE")
    })
})

app.listen(8000,(req,res) =>{
    console.log('Running...')
})