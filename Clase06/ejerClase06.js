/*********************************************************************************** */
// CLASE 06- Asincronismo.
// Ejercicio
// Misión 1:
// 1. Utiliza la API pública de Rick and Morty (docs) para obtener la lista de personajes.
// 2. Con las herramientas then, catch y finally, procesa la respuesta y devuelve por
// consola un array con los primeros 5 resultados de los 20 personajes recibidos.
/*********************************************************************************** */

/* Opcion basica con fetch */
console.log('Programa del ejercicio nro 6 iniciado...');

const data = await fetch('https://rickandmortyapi.com/api/character');
const personajes = await data.json();
const primeros5 = personajes.results.slice(0, 5);
console.log('Primeros 5 personajes:');

for (const personaje of primeros5) {
  console.log(`Personaje - ${personaje.name}`);
}   
console.log('Programa  - OPCION 1 - finalizado.');  
console.log('////////////////////////////////////////////////////////////////');  
/* Fin opcion basica con fetch */
/******************************************************************************** */
// OPCION NRo 2 - Con then, catch y finally
/* Opcion con then, catch y finally */
function obtenerPersonajes() {
    console.log('Programa del ejercicio nro 6 (con then, catch y finally) iniciado...');
    return fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        return response.json();
    })
    .then(data => {
        const primeros5 = data.results.slice(0, 5);
        console.log('...retomando con la promesa resuelta en opcionb 2:');
        primeros5.forEach((personaje, index) => {
            console.log(`Personaje ${index+1}- ${personaje.name}`);
        });
    })
    .catch(error => {
        console.error('Error al obtener los personajes:', error);
    })
    .finally(() => {
        console.log('Programa  - OPCION 2 - finalizado.');
        console.log('////////////////////////////////////////////////////////////////');  
    }); 
}
console.log('------ Opcion Nro 2 ------');
obtenerPersonajes();
/* Fin Opcion con then, catch y finally */

/******************************************************************************* */
// Ejercicio 3 - Explorando la API con Async/Await
//
// Impresionados por tu desempeño con promesas, Matías da un paso al frente.
// “El enfoque con promesas es sólido, pero en muchos casos queremos trabajar
// de manera más legible y fluida. Aquí es donde entra async/await. Veamos si
// podés replicar tu solución anterior usando esta técnica”.
//
// Misión 2:
// 1. Realiza el mismo ejercicio anterior, pero esta vez usa una función asíncrona con
// async y await para consumir la API.
// 2. Asegúrate de manejar errores correctamente con un bloque try/catch
/******************************************************************************* */

function obtenerPersonajesAsync() {
    console.log('Programa del ejercicio nro 6 (con async/await) iniciado...');
    return (async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            const data = await response.json();
            const primeros5 = data.results.slice(0, 5);
            console.log('...retomando con la promesa resuelta en opcionb 3:');
            console.log('Primeros 5 personajes (Opcion con async/await) y try/catch:');
            primeros5.forEach((personaje, index) => {
                console.log(`Personaje ${index+1}- ${personaje.name}`);
                console.log('-------------------');
            });
        } catch (error) {
            console.error('Error al obtener los personajes:', error);
        }
        finally {
            console.log('Programa  - OPCION 3 - finalizado.');
        }
    })();
}

console.log('------ Opcion Nro 3 ------');
obtenerPersonajesAsync();
/* Fin Opcion con async/await */
/*********************************************************************************** */

/* Opcion agregando mas detalles de los personajes */
async function obtenerPersonajesConDetalles() {
    console.log('Programa del ejercicio nro 6 (con async/await y mas detalles) iniciado...');
    return (async () => {
        const config = { method: 'GET', 
            headers: { 'Content-Type': 'application/json' }
        };
        try {
        const response = await fetch('https://rickandmortyapi.com/api/character',config);
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        const primeros5 = data.results.slice(0, 5);
        console.log('...retomando con la promesa resuelta en opcion Nro 4:');
        console.log('Primeros 5 personajes (Opcion con async/await y mas detalles):');
        primeros5.forEach((personaje, index) => {
            console.log(`Personaje ${index+1}- ${personaje.name}`);
            console.log(`  - Status: ${personaje.status}`);
            console.log(`  - Especie: ${personaje.species}`);
            console.log(`  - Genero: ${personaje.gender}`);
            console.log(`  - Origen: ${personaje.origin.name}`);
            console.log(`  - Ubicación: ${personaje.location.name}`);
            console.log('-------------------');
        });
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
    finally {
        console.log('Programa  - OPCION 4 - finalizado.');
        console.log('////////////////////////////////////////////////////////////////');  
    }
    })();
}

console.log('------ Opcion Nro 4 ------');
obtenerPersonajesConDetalles();
/* Fin Opcion agregando mas detalles de los personajes */
/*********************************************************************************** */ 
