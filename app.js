"use strict"

const express = require('express');
const app = express();
const port = process.env.port || 4444;

const stringTestRouters = require('./routes/stringTest');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/test', stringTestRouters);


app.get('/', (req, res, next) => {
    res.send(`
        <h1>Welcome to your app</h1>
    `);
})


app.listen(port, (err) => {
    if(err) {
        return console.log(`Something went wrong ${err}`);
    } else {
        return console.log(`Listening on port http://localhost:${port}`);
    }
});