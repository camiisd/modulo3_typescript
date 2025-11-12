/*Ejercicio 1: Creación de Objetos y Atributos
1.
Define un objeto que represente un libro con las siguientes propiedades: título, autor, y año de publicación.
2.
Crea una instancia de ese objeto y muestra sus propiedades en la consola. */

interface Libro {
    titulo: string, 
    autor: string,
    anio: number
}

const libro1: Libro = {
    titulo: 'El camino del artista',
    autor: 'Julia Cameron',
    anio: 2002
}

for (let propiedad in libro1) {
    console.log(`${libro1 [propiedad as keyof typeof libro1]}`)
}

