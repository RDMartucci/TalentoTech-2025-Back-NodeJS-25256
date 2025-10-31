import { personajesMorkAndMorty } from './ApiMorkAndMorty.js';

    //let cantidadPersonajes = prompt('Ingrese la cantidad de personajes a mostrar:');
function mostrarPersonajes() {
    (async () => {
        try {
            const totalPersonajes = await personajesMorkAndMorty();
            const cantidad = parseInt(7);

        if (isNaN(cantidad) || cantidad <= 0) {
            console.log('Por favor, ingrese un número válido mayor que cero.');
        } 
        else {
            console.log(`Mostrando ${cantidad} personajes:`);
            totalPersonajes.slice(0, cantidad).forEach((personaje, index) => {
                console.table({
                    Id: index + 1,
                    Name: personaje.name,
                    Status: personaje.status,
                    Species: personaje.species,
                });
            });
        }
    } catch (error) {
        console.error('Error al mostrar los personajes:', error);
    }
    })();
}
    

mostrarPersonajes();
