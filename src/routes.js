const express = require("express");
const questionsController = require("./controllers/questionsController");
const roomController = require("./controllers/roomController");

const routes = express.Router();

routes.get("/", (req, res) => res.render("index"));

routes.get("/create-room", (req, res) => res.render("create-room"));

routes.post(
  "/questions/:roomid/:questionid/:action",
  questionsController.index
);
routes.post("/questions/:roomid", questionsController.create);

routes.post("/room", (req, res) => roomController.index(req, res));
routes.get("/room/:roomid", roomController.open);

routes.get("/password-error", (req, res) => res.render("password-error"));

module.exports = routes;
