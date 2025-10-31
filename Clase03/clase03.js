/*
-> EJERCICIO NRO 3.
“Imaginá que los precios de los productos del cliente están listos para cargarse en el sistema” te dicen. Pero hay un detalle: antes de enviarlos, tenés que calcular el IVA del 21% y presentarlos de manera clara.

Tu misión:

A)Creá un array con 10 números que representen los precios de los productos.

B)Utilizá un método de array para calcular el precio con IVA incluido para cada valor.

C)Matías te desafía a usar template literals para estructurar tu salida de esta forma:

El precio es: ${valor}.- IVA incluido.

*/
//A)
const precios = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
//B)
let preciosConIVA = precios.map(precio => precio * 1.21);

console.log('Array precios:',precios);
console.log('Array con IVA:',preciosConIVA);

//C)

preciosConIVA= preciosConIVA.map(precio => console.log(`El precio es: ${precio}.- IVA incluido.`));




