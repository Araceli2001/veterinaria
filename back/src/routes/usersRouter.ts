import {Router} from "express";

import {getAllUsers, getUserById, createUser, loginUser} from "../controllers/usersController";
import auth from "../middlewares/auth";
import validateUserData from "../middlewares/validate";

const routerUser: Router = Router();


// router.get("/users", (req, res) => {
//     res.send("todo bien 1")
// })

//users----
routerUser.get("/users", auth, getAllUsers);
routerUser.get("/users/:id", getUserById);

routerUser.post("/users/register", validateUserData, createUser );
routerUser.post("/users/login", loginUser );


// routerUser.delete("/users/:id", deleteUser )


export default routerUser;