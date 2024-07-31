"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const routerUser = (0, express_1.Router)();
// router.get("/users", (req, res) => {
//     res.send("todo bien 1")
// })
//users----
routerUser.get("/users", usersController_1.getAllUsers);
routerUser.get("/users/:id", usersController_1.getUserById);
routerUser.post("/users/register", usersController_1.registerUser);
routerUser.post("/users/login", usersController_1.loginUser);
routerUser.delete("/users");
exports.default = routerUser;
