const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', async (req, res, next) => {
    try {
        await res.sendFile(path.join(__dirname, '../html/testPage.html'));
    } catch {
        res.send("Something went wrong")
    }
});


router.post('/', async (req, res, next) => { 
    let counter = 0;
    let returnString = "";

    try {
        let stringToCut = req.body.string_to_cut;
        for(let i=0; i < stringToCut.length; i++) {
            counter++;

            if(counter % 3 === 0) {
                returnString += stringToCut[i];
            }
        }
        res.send({
            "return_string": `${returnString}`
        })
    } catch {
        res.send("I am sorry something went wrong with recieving the data");
    }
});


module.exports = router;