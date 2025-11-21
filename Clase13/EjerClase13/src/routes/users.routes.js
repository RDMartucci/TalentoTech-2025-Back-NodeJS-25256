import express from "express"

import {
    getAllUsers,
    getUserById,
    getUsersAdmin
} from "../controllers/users.controllers.js";    

const routes = express.Router();


//rutas a usuarios.
routes.get("/users", getAllUsers);

routes.get("/users/:id", getUserById);

routes.get("/users/:id/admin", getUsersAdmin);


export default routes;