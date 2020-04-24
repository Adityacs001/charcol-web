"use strict";
var express = require("express");
var app = express();
var server = require("http").createServer(app);
app.use(express.static(__dirname + "/public/"));

app.use("*", function (req, res, next) {
  try {
    res.sendFile(__dirname + "/public/index.html");
  } catch (e) {
    console.log(e);
  }
});

// Start server
var port = process.env.PORT || 8089;
server.listen(port, function () {});
