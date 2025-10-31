import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const corsOptions = {
  origin: ['http://localhost:3000', 'https://midominio.com'], // dominios permitidos
  methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
  exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
  credentials: true,                                          // habilitar credenciales
  maxAge: 600,                                                // cache preflight
  optionsSuccessStatus: 204                                   // respuesta preflight exitosa
};

app.use(cors(corsOptions));


// app.use((req ,res, next) => {
//   console.log(`Datos recibidos: ${req.method} ${req.url}`);
//   next();
// });



//Configurando headers (CORS) de forma manual.
app.use((req, res, next) => { 
  console.log(`Middleware de CORS activado para ${req.method} ${req.url}`);
  // Permitir un dominio 
  res.header('Access-Control-Allow-Origin', 'https://example.com'); 
  // Métodos permitidos 
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
  // Encabezados permitidos 
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
  // Permitir cookies/credenciales 
  res.header('Access-Control-Allow-Credentials', 'true'); 
  next(); 
});

//configurando cors con paquete cors.



app.get("/HTML", (req, res) => {
  res.send("<h1>Hola Mundo</h1>");
});

app.get("/JSON", (req, res) => {
  res.send({ productos:[
    {id:1, nombre:"Producto 1", precio:100},
    {id:2, nombre:"Producto 2", precio:200},
    {id:3, nombre:"Producto 3", precio:300}
  ]});
});

// ruta de ejemplo con path params.
app.get('/item/:id', (req, res) => { 
  // Captura el valor dinámico de la ruta 
  const itemId = req.params.id; 
  // lógica para DEVOLVER el item solicitado 
  res.send( `Item seleccionado: ${itemId}`);
});

// Ruta con query params.
app.get('/items', (req, res) => { 
  const category = req.query.category; 
  const price = req.query.price; 
  res.send(`Categoría: ${category}, Precio: ${price}`); 
});



// Middleware para manejar errores 404. El next() no se usa en este caso. 
app.use((req, res, next) => { 
  res.status(404).send('Recurso no encontrado o ruta inválida'); 
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`);
});
