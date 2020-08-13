var express = require('express');
var router = express.Router();

router.get("/:tenCourse/:tenBai", (req, res) =>{
    var tenCourse = req.params.tenCourse;
    var tenBai = req.params.tenBai;

    res.send(tenCourse + " " + tenBai);
})


module.exports = router;
