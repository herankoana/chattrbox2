var WebSocket = require("ws");
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
  port: port
});

var messages = [];
var topic = "";

console.log("websockets server started");

ws.on("connection", function(socket) {
  console.log("client connection established");

  // Give topic info to new connections
  if (topic.length < 1) {
    socket.send("*** Topic is " + "'General'");
  } else {
    socket.send("*** Topic is " + "'" + topic + "'");
  }

  // Send all messages to new connections
  messages.forEach(function(msg) {
    socket.send(msg);
  });

  socket.on("message", function(data) {
    console.log("message received: " + data);
    // Check for /topic command
    if (data.split(" ")[0] == "/topic") {
      // Remove the "/topic" from the string
      topic = data;
      topic = topic.split(" ").slice(1).join(" ");

      ws.clients.forEach(function(clientSocket) {
        clientSocket.send("*** Topic has changed to " + "'" + topic + "'");
      });
    } else {
      // Send messages in real time to all clients
      messages.push(data);
      ws.clients.forEach(function(clientSocket) {
        clientSocket.send(data);
      });
    }
  });
});
