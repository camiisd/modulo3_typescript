/*Ejercicio 8: Funciones con diferentes tipos de retorno
Consigna: Crea una función llamada calcularArea que acepte el tipo de figura ("circulo" o "rectangulo") y 
luego acepte los parámetros necesarios para cada tipo de figura (radio para el círculo y largo y ancho para el rectángulo). 
La función debe retornar el área de la figura. Usa tipos específicos para cada caso.*/

function calcularArea (figura: 'circulo' | 'rectangulo', a: number, b?: number) : any {
    if (figura === 'circulo') {
        return 3.14 * (a * a)
    } else if ( figura === 'rectangulo') {
        if (typeof b !== 'number') throw new TypeError('Se requiere "ancho" (number) para rectángulo.');
        return a * b 
    }
} 

console.log(`El área del círculo es: ${calcularArea("circulo", 5)}`); // El área del círculo es: 78.5398...
console.log(`El área del rectángulo es: ${calcularArea("rectangulo", 5, 10)}`); // El área del rectángulo es: 50