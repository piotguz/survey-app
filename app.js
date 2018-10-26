const args = process.argv.slice(2)

var connect = require('connect');
var serveStatic = require('serve-static');
var MongoClient = require('mongodb').MongoClient;
var url = args[0];
var restPort = args[1];
var webPort = args[2];
const express = require('express');
const app = express();

// Start static survey UI
connect().use(serveStatic(__dirname)).listen(webPort, function () {
    console.log('Static web server running on ' + webPort + '...');
});


// Start REST function for storing results to mongodb
app.post("/survey_result", function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("survey_results");
        dbo.collection("survey_results").insertOne(req, function (err, res) {
            if (err) throw err;
            console.log("1 survey result added");
            db.close();
        });
    });
});
app.listen(restPort, () => console.log('Rest endpoint server running on ' + restPort + "..."));