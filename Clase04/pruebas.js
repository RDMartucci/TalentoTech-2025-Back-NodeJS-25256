class Persona {
    constructor(nombre, edad,dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;

        this.presentarse = function () {
            console.log(`Hola, me llamo ${this.nombre}`);
        }
    
    }    
}

const personas = [];

function creaPersona(nombre, edad,dni) {
    const nuevaPersona = new Persona(nombre, edad,dni);
    personas.push(nuevaPersona);
    return nuevaPersona;
}

creaPersona('Billy',50,'24669220');
creaPersona('Cintia',44,'28550981');
creaPersona('Rico',18,'43528150');
creaPersona('Vanesa',33,'36251854');
creaPersona('Hector',45,'29521584');

console.log('Personas creadas:',personas);
console.table(personas);
personas.forEach(persona => persona.presentarse());


/* ************************************************************************/
