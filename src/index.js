import { PeerServer } from "peer";
// var PeerServer = require("peer").PeerServer;
var server = PeerServer({ port: 3500, path: "/connect" });
console.log("server connected!!")