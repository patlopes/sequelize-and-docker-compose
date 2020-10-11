const express = require('express');
const userController = require('./controllers/UserController');

const routes = express.Router();

routes.get("/user/:id", userController.get);
routes.get("/users", userController.index);
routes.post("/user", userController.post);

module.exports = routes;