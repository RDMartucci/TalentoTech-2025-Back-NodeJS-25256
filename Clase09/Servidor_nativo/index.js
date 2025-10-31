import { createServer } from 'http';

const server = createServer((req, res) => {
// Código de estado HTTP
res.statusCode = 200;
// Configuramos el tipo de contenido
res.setHeader('Content-Type', 'text/plain');
// Enviamos la respuesta
res.end('Hola, mundo!');
});

const PORT = 3000;
server.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
