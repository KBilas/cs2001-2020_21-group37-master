//import express
const SQLManager = require('./SQLManager')
const express = require('express');
var bodyParser = require('body-parser')

const app = express();
var cors = require('cors');

const sql = new SQLManager();

app.options('*', cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
// Routes which should handle request


app.get('/hello', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.post("/exercise/create", async (req, res) => {
    const body = req.body;
    console.log(body);
    // call async sql function

    const prom = await sql.createExercises(body.exercise, body.exerciseType);
    console.log(`returned await function: ${prom}`)
    if (prom) {
        res.status(201)
    } else res.status(404);
    return res.send();
})


/*sql.createExercises()
    .then(res => {
        console.log(res[0].name);
        console.log(res[0].type);
    })*/
//export app
module.exports = app;