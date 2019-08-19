const express = require("express");
let app = new express();

app.get("/", function(req, res) {
    res.send("Hello, this sample all for testing whether node js is working properly or not");
});

app.get("/about", function(req, res) {
    newFunction(res);
});

app.get("/contact", function(req, res) {
    res.send("khounkham@gmail.com");
});

app.get("*", function(req, res) {
    res.send("Opp!!!, you're lost. please check your navigation.");
});

app.all("*", function(req, res) {
    res.send("What're you finding");
});

let port = 12345;
app.listen(port, function() {
    console.log("Server started listening at localhost:" + port);
});

function newFunction(res) {
    res.send("About this test web app.");
}