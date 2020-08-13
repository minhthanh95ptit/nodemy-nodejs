const express = require('express');
const app = express();
const router = express.Router();

router.get("/html/bai1", (req, res) =>{
    res.send("Welcome bạn đến html bài 1");
});

module.exports = router;

