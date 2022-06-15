const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => res.render("index"));

routes.get("/questions", (req, res) => res.render("questions"));

routes.get("/create-room", (req, res) => res.render("create-room"));

module.exports = routes;
