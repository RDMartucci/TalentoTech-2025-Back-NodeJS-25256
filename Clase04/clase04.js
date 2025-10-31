/*
-> Ejercicio Práctico NRO 4.

Misión 1:

1) Crea un array con 10 objetos, donde cada objeto represente un automóvil con la siguiente información:

Marca

Modelo

Año

Color

2) Usa un método de array para recorrer la lista e imprime por consola todos los datos de los automóviles cuyo año sea mayor a 2018.

Matías añade: “Queremos que veas esto como un ejercicio para prepararte para trabajar con datos reales en el futuro”.
*/

//Creo la clase constructora coche. (padre)
class Coche {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color
    }
}
console.log('clase creada Coche:',Coche);

const flota = [];

//Funcion para agregar coches al array flota.
function agregarCoche(marca, modelo, año, color) {
  const coche = new Coche(marca, modelo, año, color);
  flota.push(coche);
  return coche;
}

// Uso:
agregarCoche('Fiat','Movi',2020,'blanco');
agregarCoche('Fiat','Cronos',2025,'gris plata');
agregarCoche('Renault','Sandero Stepway',2019,'negro');
agregarCoche('Renault','Logan',2008,'negro');
agregarCoche('Ford','Ka kinetic',2023,'azul');
agregarCoche('Ford','Mondeo',2000,'blanco');
agregarCoche('Nissan','Kicks',2021,'naranja');
agregarCoche('Toyota','Corolla Cross',2024,'negro');
agregarCoche('Toyota','Hilux',2009,'blanco');
agregarCoche('Fiat','Uno Way',2019,'gris plata');

console.log('Flota completa:',flota);

console.log(
  'Coches año mayor a 2020:',
  flota.filter((coche) => coche.año >= 2020)
);


/* ************************************************************************
Misión 2:
1. Crea una función que recorra el array de automóviles.
2. Usa destructuring dentro de la función para obtener el color de cada automóvil.
3. La función debe aceptar un color como parámetro y devolver por consola cuántos
automóviles tienen ese color.
*/

// Función que cuenta los coches de un color dado
const recorreFlotaXColor = (arreglo, claveColor) => {
    const coincidencias = arreglo.filter(({ color }) => color === claveColor);
    console.log(`Coincidencias de color ${claveColor}:`, coincidencias.length);
};

// Ejemplo de uso
recorreFlotaXColor(flota, 'blanco');
recorreFlotaXColor(flota, 'negro');
recorreFlotaXColor(flota, 'gris plata');

// Función que busca coches por color
const recorreFlotaXColor2 = (arreglo, claveColor) => {
    const coincidencias = arreglo.filter(({ color }) => color === claveColor);
    
    console.log(`Coincidencias de color (${claveColor}):`, coincidencias.length);
    console.table(coincidencias); // Muestra en formato tabla
    
    return coincidencias; // Devuelve el array filtrado
};

// Ejemplo de uso
const blancos = recorreFlotaXColor2(flota, 'blanco');
const negros = recorreFlotaXColor2(flota, 'negro');
const grises = recorreFlotaXColor2(flota, 'gris plata');

console.log("Autos blancos encontrados:", blancos);

/******************************************************** */
// Hacer que los objetos sean instancias de la clase.
/******************************************************** */
//toma como parametro un objeto, para no pasar todos los claves por separado.

class Vehiculo {
    constructor(vehiculo) {
        this.marca = vehiculo.marca;
        this.modelo = vehiculo.modelo;
        this.año = vehiculo.año;
        this.color = vehiculo.color
    }
}

class Auto extends Vehiculo {
  constructor(vehiculo) {
    super(vehiculo);
    this.tipo = 'auto';
  }
}
