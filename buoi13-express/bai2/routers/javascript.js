const express = require('express');
const app = express();
const router = express.Router();

router.get("/javascipt/bai1",(req, res) =>{
    res.send("Welcome bạn đến javascript bài 1");
})

router.get("/javascipt/bai2",(req, res) =>{
    res.send("Welcome bạn đến javascript bài 2");
})


module.exports = router;

