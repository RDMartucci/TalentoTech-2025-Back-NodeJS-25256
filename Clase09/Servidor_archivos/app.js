import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// depende de la version de node...
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//---

const app = express();
 // Configurar middleware para servir archivos estáticos
 app.use((req, res, next) => {
     console.log(`1-Solicitud recibida: ${req.method} ${req.url}`);
     console.log('Procesando solicitud 1... middleware 1 personalizado');
     next();
    });
    
app.use('/docs', express.static(join(__dirname, 'public')));

// Middleware de aplicación
app.use((req, res, next) => {
    console.log(`2- Datos recibidos: ${req.method} ${req.url}`);
    console.log('Middleware personalizado 2 en acción...');
    next(); // Pasa el control al siguiente middleware o ruta
});
// Ruta principal
app.get('/testmiddleware', (req, res) => {
    res.send('Hola desde Express con middlewares!');
});


app.use((req, res, next) => {
    console.log(`3-Solicitud recibida: ${req.method} ${req.url}`);
    console.log('Procesando solicitud 3... middleware 3 personalizado');
    next();
});
app.get('/', (req, res) => {
    res.send('Hola desde Express!');
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
 });
