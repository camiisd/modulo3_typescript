/**Ejercicio 3: Creación y manipulación de objetos
Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre (string), deporte (string), y energia (number). 
Luego, define una función entrenar que acepte el objeto deportista y un número de horas de entrenamiento, disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. 
Al final, muestra el estado del deportista en la consola. */

let deportista : {nombre: string, deporte: string, energia: number} = {
    nombre: 'Nahuel',
    deporte: 'tenis',
    energia: 75,
    
}

function entrenamiento (deportista: any, horas: number) : void{
   deportista.energia -= (horas * 5);
   console.log(`${deportista.nombre}, quien practica ${deportista.deporte}, ha entrenado ${horas} horas. Su energía se encuentra en ${deportista.energia}.`)
}

entrenamiento(deportista,5)