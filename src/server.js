const express = require("express");
const path = require("path");

const routes = require("./routes");

const server = express();

server.use(routes);

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

// server.get("/", (req, res) => res.render("index"));

console.log();
server.listen(3000, () => console.log("Rodando na porta 3000"));
