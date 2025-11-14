/**Ejercicio 7: Función que modifica propiedades de un objeto
Consigna: Crea una función llamada aumentarSalario que acepte un objeto empleado con las propiedades nombre (string) y salario (number), 
y un número que represente el porcentaje de aumento. La función debe aumentar el salario del empleado y devolver el nuevo salario. Muestra en la consola el resultado. */



let empleado : {nombre: string, salario: number} = {
    nombre: 'Nahuel',
    salario: 1000000
}

function aumentarSalario (empleado : {nombre: string, salario: number}, porcentaje: number) : string {
    let aumento = (empleado.salario*porcentaje) /100
    empleado.salario += aumento
    return `El nuevo salario de ${empleado.nombre} es $${empleado.salario}.`
}

console.log(aumentarSalario(empleado, 10))