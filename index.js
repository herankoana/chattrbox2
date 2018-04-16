var http = require("http");
var fs = require("fs");
var extract = require("./extract");
// eslint-disable-next-line no-unused-vars
var wss = require("./websockets-server");
var mime = require("mime");

var handleError = function(err, res) {
  res.writeHead(404);
  fs.readFile("app/error.html", function(err, data) {
    res.end(data);
  });
};

var server = http.createServer(function(req, res) {
  console.log("Responding to a request.");

  var filePath = extract(req.url);
  fs.readFile(filePath, function(err, data) {
    if (err) {
      handleError(err, res);
      return;
    } else {
      res.end(data);
    }
  });
});

// Running MIME Tests. All are successful.
console.log("Type of app/test.txt is " + mime.getType("app/test.txt"));
console.log("Type of app/test.txt is " + mime.getType("app/pdf-sample.pdf"));
console.log("Type of app/test.txt is " + mime.getType("app/sampleaudio_0.4mb.mp3"));

server.listen(3000);
