const express = require('express');
const router = express.Router();

router.get('/:str', async (req, res, next) => {
    try {
        let myStr = await req.params.str;

        res.send({
            "myStr": myStr
        });
    } catch {
        res.send("I'm sorry there was an error");
    }
});


router.post('/result', async (req, res, next) => { 
    try {
        let result = await req.params.str;

        res.send({
            "result": result + "two"
        });
    } catch {
        res.send("I am sorry but we recieved no data");
    }
});


module.exports = router;