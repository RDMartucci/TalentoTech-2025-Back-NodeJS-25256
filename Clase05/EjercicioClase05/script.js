
/********************************************************************************************* */
//Ejemplo de uso de process.argv
// process.argv es un array que contiene los argumentos pasados al script desde la línea de comandos
// El primer elemento es la ruta del ejecutable de Node.js
// El segundo elemento es la ruta del archivo JavaScript que se está ejecutando.

// console.log('Programa del ejercicio nro 5 iniciado...');

// Ignoramos los dos primeros elementos con slice
// const argumentos = process.argv.slice(2);

// console.log('Argumentos recibidos:', argumentos);

// // Ejemplo simple: si el primer argumento es 'saludar', saludamos al segundo argumento
// // Si no se proporciona un segundo argumento, saludamos a 'mundo'.
// if (argumentos[0] === 'saludar') {
// console.log(`¡Hola, ${argumentos[1] || 'mundo'}!`);
// } else if (argumentos[0] === 'despedir') {
// console.log(`¡Adiós, ${argumentos[1] || 'mundo'}!`);
// } else {
// console.log('Comando no reconocido. Usa "saludar" o "despedir".');
// }

// console.log('Programa finalizado.');    
/********************************************************************************************* */



/**************************************************************************** */
// Ejercicio 2 - ¡Acciones dinámicas con Node.js!
// Con el proyecto configurado, Matías lanza el siguiente desafío.
// “El siguiente paso evalúa tu capacidad para manejar interacciones
// dinámicas en Node.js”, dice mientras sonríe. “Queremos que implementes
// un sistema simple para procesar comandos desde la terminal”.
// Misión 2:
// 1. Si el comando es npm run start GET, imprime por consola el mensaje:
// Toma un dato
// 2. Si el comando es npm run start POST {data}, imprime por consola el
// mensaje:
// Recibimos {data} satisfactoriamente
// 3. Si el comando es npm run start PUT {id}, imprime por consola el mensaje:
// Modificamos el item con id: {id} satisfactoriamente
// 4. Si el comando es npm run start DELETE {id}, imprime por consola el
// mensaje:
// El item con el id: {id} se eliminó con éxito
// Matías concluye: “Este desafío es clave para ver cómo manejas el flujo de datos y
// comandos, algo vital en cualquier proyecto backend”.
/**************************************************************************** */
// const argumentos = process.argv.slice(2);
// console.log('Server iniciado: (Argumentos recibidos:', argumentos, ')');

// argumentos.forEach((arg, index) => {
//     // console.log(`Argumento ${index + 1}: ${arg}`);
//     if (arg !== 'GET' && arg !== 'POST' && arg !== 'PUT' && arg !== 'DELETE') {
//         console.log('Comando no reconocido. Usa "GET", "POST {data}", "PUT {id}" o "DELETE {id}".');
//         return;
//     } else {
//         if (arg === 'GET') console.log('Toma un dato.');
//         if (arg === 'POST') {
//             if (argumentos.length > 1) {
//                 console.log(`Recibimos ${argumentos[index + 1]} satisfactoriamente`);
//             } else {
//                 console.log('Falta el dato para el comando POST.');
//             }
//         }
//         if (arg === 'PUT') {
//             if (argumentos.length > 1) {
//                 console.log(`Modificamos el item con id: ${argumentos[index + 1]} satisfactoriamente.`);
//             } else {
//                 console.log('Falta el id para el comando PUT.');
//             }
//         }
//         if (arg === 'DELETE') {
//             if (argumentos.length > 1) {
//                 console.log(`El item con el id: ${argumentos[index + 1]} se eliminó con éxito.`);
//             } else {
//                 console.log('Falta el id para el comando DELETE.');
//             }
//         }
//     }
// });

/* opcion con switch */
const argumentos = process.argv.slice(2);
console.log('Server iniciado: (Argumentos recibidos:', argumentos, ')');

const comando = argumentos[0];//toma el primer argumento.
const parametro = argumentos[1]; //toma el segundo argumento.
switch (comando) {
    case 'GET':
        console.log('Toma un dato.');
        break;
    case 'POST':
        if (parametro) {
            console.log(`Recibimos ${parametro} satisfactoriamente.`);
        } else {
            console.log('Falta el dato para el comando POST.');
        }
        break;
    case 'PUT':
        if (parametro) {
            console.log(`Modificamos el item con id: ${parametro} satisfactoriamente.`);
        } else {
            console.log('Falta el id para el comando PUT.');
        }
        break;
    case 'DELETE':
        if (parametro) {
            console.log(`El item con el id: ${parametro} se eliminó con éxito.`);
        } else {
            console.log('Falta el id para el comando DELETE.');
        }
        break;
    default:
        console.log('Comando no reconocido. Usa "GET", "POST {data}", "PUT {id}" o "DELETE {id}".');
        break;
}


/************************************* */
// PROFESOR //
// console.log("programa iniciado")

// const args = process.argv.slice(2)

// if(args[0] == "GET"){
//     console.log("Toma un dato")
// }else if(args[0] == "POST"){
//     console.log(`Recibimos ${args[1]} satisfactoriamente`)
// }else if(args[0] == "PUT"){
//     console.log(`Modificamos el item con id: ${args[1]} satisfactoriamente`)
// }else if(args[0] == "DELETE"){
//     console.log(`El item con el id: ${args[1]} se eliminó con éxito`)
// }else{
//     console.log("Comando no reconocido")
// }
/**********     *************************** */
