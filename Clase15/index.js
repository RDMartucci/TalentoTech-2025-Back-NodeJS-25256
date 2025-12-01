import express from "express"
import cors from "cors"

import productsRoutes from "./src/routes/products.routes.js";
import loginRoutes from "./src/routes/auth.routes.js";
import { authentication } from "./src/middleware/authentication.js";

const app = express()
const PORT = process.env.PORT || 3000;
const corsConfig = {
    origin: ['http://localhost:3000/', 'https://midominio.com/'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}

app.use(express.json()); //middleware para parsear el body a json
app.use(cors(corsConfig));

//middleware para loguear las peticiones.
app.use((req, res, next) => {
    // console.log(`Index->Datos recibidos->metodo:${req.method} url:${req.url}`);
    console.log(`Index->Datos recibidos->metodo:${req.method} url:${req.url}`);
    // AÑADE ESTA LÍNEA para verificar el body después del parseo
    console.log('Index->Body después de express.json:', req.body);
    next();
});

//Rutas.
app.use("/auth", loginRoutes);

//Rutas protegidas con autenticación
app.use(authentication);
app.use("/api", productsRoutes);

//Manejo de rutas no definidas.
app.use((req, res, next) => {
    res.status(404).send('<h2>Recurso no encontrado o ruta inválida</h2>');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${ PORT }`);
});

