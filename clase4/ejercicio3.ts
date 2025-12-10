/*Actividad 3: Crear una función genérica
Crea una función genérica que tome un parámetro de cualquier tipo y lo devuelva. Prueba la función con diferentes tipos de datos.*/

function generica (valor: any) : any {
    return valor;
} 

console.log(generica(5));
console.log(generica('Hola mundo!'));
console.log(generica(true));