const express = require("express");
const questionsController = require("./controllers/questionsController");
const roomController = require("./controllers/roomController");

const routes = express.Router();

routes.get("/", (req, res) => res.render("index"));

routes.get("/create-room", (req, res) => res.render("create-room"));

routes.post("/questions/:roomid/:messageid/:action", (req, res) =>
  questionsController.index(req, res)
);

routes.post("/room", (req, res) => roomController.index(req, res));
routes.get("/room/:roomid", (req, res) =>
  res.render("room", { roomid: req.params.roomid })
);

module.exports = routes;
