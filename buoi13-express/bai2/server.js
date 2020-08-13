const express = require('express');
const router = require('./routers/javascript');
const app = express();
const router1 = require('./routers/javascript');
const router2 = require('./routers/html');

app.use('/nodemy', router1)
app.use('/nodemy', router2)
app.listen(8000, (req, res) =>{
    console.log("RUNNING...");
})