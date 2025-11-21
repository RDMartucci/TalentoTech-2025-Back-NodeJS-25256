import fs from "fs"
import path from "path"
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
// console.log("models->fileName: ", fileName);

const dirname = path.dirname(fileName);
// console.log("models->dirname: ", dirname);

//ruta al archivo db.json
const filePath = path.join(dirname, "db.json");
// console.log("models->filePath: ", filePath);

async function leerDB() {
    try{
        console.log("models->leerDB");
        
        const data = fs.readFileSync(filePath, "utf-8")
        // console.log("models->data", data);
        
        const products = await JSON.parse(data)
        // console.log("models->products", products);

        return products
    }catch(error){
        console.log(error)
    }
}

//leerDB()

export async function obtenerProductos(){
    const productos = await leerDB()
    console.log("capa de modelo: ", productos)
    return productos
}