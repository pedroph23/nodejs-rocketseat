const express = require("express");
const routes = express.Router();
const UserController = require("./app/controllers/UserController");

routes.get("/signup", UserController.create);
//routes.post("/signup", UserController.store);
routes.post("/usuario", UserController.store);
routes.get("/usuario", UserController.getAll);
routes.get("/usuario/:id", UserController.findOne);
routes.put("/usuario/:id", UserController.update);
routes.delete("/usuario/:id", UserController.delete);
module.exports = routes;
