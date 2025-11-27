/*Ejercicio 9: Funciones con retorno void y manipulación de objetos
Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y encendido (booleano). Define una función encenderCoche que acepte el objeto
coche y cambie el valor de encendido a true. Muestra el estado del coche en la consola antes y después de llamar a la función.*/

let coche: {marca: string, modelo: string, encendido: boolean} = {
    marca: 'Ford',
    modelo: 'Focus', 
    encendido: false,
}

function encenderCoche (coche: {marca: string, modelo: string, encendido: boolean}) {
    coche.encendido = true
    console.log (`El ${coche.marca} ${coche.modelo} está`, coche.encendido ? 'encendido.' : 'apagado.' )
}

console.log(`Antes de encender: ${coche.encendido}`); 
console.log(`El ${coche.marca} ${coche.modelo} está`, coche.encendido ? 'encendido.' : 'apagado.' ); 
encenderCoche(coche); 
console.log(`Después de encender: ${coche.encendido}`)