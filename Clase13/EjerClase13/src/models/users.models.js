import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;
console.log("__dirname:", __dirname);

// Ruta al archivo JSON que simula la "base de datos"
const dataPathUsers = path.join(__dirname, "../../data/usuarios.json");
console.log("dataPathUsers:", dataPathUsers);

// función para leer la base de datos JSON.
async function leerDBUsers() {
    try {
        console.log("models->leerDBUsers");
        const data = fs.readFileSync(dataPathUsers, "utf-8");
        const users = JSON.parse(data);
        return users;
    } catch (error) {
        console.log(error);
    }   
}
// Método para obtener todos los usuarios
export async function getAllUsers() {
    const users = await leerDBUsers();
    return users;
}

// ESTE NO IRIA ACA PORQUE LO HACE LA PARTE DE SERVICIOS.
//
// // Método para buscar un usuario por su ID.
// export async function getUserById(id) {
//     const users = await getAllUsers();
//     return users.find(user => user.id === id);
// }
//////////////////////////////////////////////////

