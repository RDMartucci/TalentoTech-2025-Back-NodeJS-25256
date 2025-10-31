import express from 'express';
//Crear una nueva instancia en nuestra aplicación.
const app = express();

//definir la respuesta a una ruta podemos llamar al método .get()
//usando un midelware
app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    console.log('middleware 1');
    next();
});
app.get('/', (req, res) => {
    res.send('Hola, mundo desde Express!');
});
app.use((req, res, next) => {
    console.log(`2-Datos recibidos: ${req.method} ${req.url}`);
    console.log('middleware 2');
    next();
});
app.get('/ping', (req, res) => {
    res.send('pong');
});

//agregamos un par de rutas más
//agregamos un middleware específico para estas rutas
app.use((req, res, next) => {
    console.log(`3-Datos recibidos: ${req.method} ${req.url}`);
    console.log('middleware 3');
    next();
});
app.get('/usuarios', (req, res) => {
    res.send('Aquí estará la lista de usuarios');
});
app.use((req, res, next) => {
    console.log(`4-Datos recibidos: ${req.method} ${req.url}`);
    console.log('middleware 4');
    next();
});
app.get('/productos', (req, res) => {
    res.send('Aquí estará la lista de productos');
});
/////



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor con express corriendo en el puerto: http://localhost:${PORT}`);
});

