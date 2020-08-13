const express = require('express');
const app = express();
const router = require('./routers/courseRouter');

app.use('/', router);

app.listen(8000, (req, res) => {
    console.log("Running...")
})