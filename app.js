const express = require('express');
const app = express();
const http = require("http");

const socketio = require("socketio");

const server = http.createServer(app)
app.get("/", function (req, res){
    res.send("hey");
});

app.listen(3000);
