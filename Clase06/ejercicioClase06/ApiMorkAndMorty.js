export async function personajesMorkAndMorty() {
    console.log('------ API de Mork y Morty -----');
    return (async() => {
        console.log('Programa - API de Mork y Morty - iniciado...');

        const urlAPI = 'https://rickandmortyapi.com/api/character';
        const config = { method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        try {
            const response = await fetch(urlAPI, config);
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            const data = await response.json();
            console.log('Se obtuvieron los Personajes de la API de Mork y Morty correctamente.');


            return data.results;
        } catch (error) {
            console.error('Error al obtener los personajes:', error);
            return [];
        }
        finally {
            console.log('Programa - API de Mork y Morty - finalizado. Volviendo...');
        }
    })();
}

// personajesMorkAndMorty();
