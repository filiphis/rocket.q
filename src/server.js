const express = require("express");
const path = require("path");

const routes = require("./routes");

const server = express();

server.use(express.static("public"));
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(routes);

server.listen(3000, () => console.log("Rodando na porta 3000"));
