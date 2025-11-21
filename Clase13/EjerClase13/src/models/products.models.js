import fs from 'fs'; 
import path from 'path'; 
const __dirname = import.meta.dirname; 
console.log("__dirname:", __dirname);


// Ruta al archivo JSON que simula la "base de datos" 
const dataPathProducts = path.join(__dirname, '../../data/productos.json');
console.log("dataPathProducts:", dataPathProducts);

//función para leer la base de datos JSON.
async function leerDB() {
    try{
        console.log("models->leerDB");
        
        const data = fs.readFileSync(dataPathProducts, "utf-8")
        // console.log("models->data", data);
        
        const products = JSON.parse(data)
        // console.log("models->products", products);

        return products
    }catch(error){
        console.log(error)
    }
}

// Método para obtener todos los productos 
export async function getAllProducts() { 
    const products = await leerDB(); 
    return products;
}; 

// Método para buscar un producto por su ID 
export async function getProductById(id) { 
    const products = await getAllProducts(); 
    return products.find(product => product.id === id); 
}; 


// Método para guardar un producto en el archivo JSON 
export function saveProduct(name, price) { 
    const products = getAllProducts(); 
    products.push({ id: products.length, name, price }); 
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2)); 
}; 

// Método para eliminar un producto por su ID 
export function deleteProduct(id) { 
    const products = getAllProducts(); 
    products = products.filter(product => product.id !== id); 
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2)); 
};

// Método para actualizar un producto por su ID
export function updateProduct(id, name, price) { 
    const products = getAllProducts(); 
    const index = products.findIndex(product => product.id === id); 
    if (index !== -1) { 
        products[index] = { id, name, price }; 
        fs.writeFileSync(dataPath, JSON.stringify(products, null, 2)); 
    }
};


