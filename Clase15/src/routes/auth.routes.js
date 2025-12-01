import express from 'express'; 
import { login } from '../controllers/auth.controller.js'; 

//Crear el router
const routes = express.Router(); 

//Definir las rutas
routes.post("/login", login); 

//Exportar el router
export default routes;
