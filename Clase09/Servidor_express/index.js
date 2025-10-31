import express from 'express';
//Crear una nueva instancia en nuestra aplicación.
const app = express();

//definir la respuesta a una ruta podemos llamar al método .get()
app.get('/', (req, res) => {
    res.send('Hola, mundo desde Express!');
});

//agregamos un par de rutas más
app.get('/usuarios', (req, res) => {
    res.send('Aquí estará la lista de usuarios');
});
app.get('/productos', (req, res) => {
    res.send('Aquí estará la lista de productos');
});
/////

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor con express corriendo en el puerto: http://localhost:${PORT}`);
});


