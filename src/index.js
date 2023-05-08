import { PeerServer } from "peer";
var server = PeerServer({ port: 443, path: "/connect" });

server.on("connection", function (id) {
  console.log("new connection with id " + id);
});

server.on("disconnect", function (id) {
  console.log("disconnect with id " + id);
});


