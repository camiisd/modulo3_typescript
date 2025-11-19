/**Ejercicio 2: Métodos en Objetos
1.
Modifica el objeto del ejercicio anterior para que incluya un método llamado descripcion() que devuelva una descripción del libro.
2.
Llama al método y muestra el resultado en la consola. */
const libro1 = {
    titulo: 'El camino del artista',
    autor: 'Julia Cameron',
    anio: 2002,
    descripcion: function() {
        return `El libro se titula "${this.titulo}" fue escrito por ${this.autor} en el año ${this.anio}.`
    }
}

console.log(libro1.descripcion())