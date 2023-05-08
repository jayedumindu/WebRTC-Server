import { PeerServer } from "peer";
var server = PeerServer({ port: 443, path: "/connect" });

server.on("connection", function (client) {
  console.log("new connection with id " + client.id);
});

server.on("disconnect", function (client) {
  console.log("disconnect with id " + client.id);
});

console.log("server is listening........")


