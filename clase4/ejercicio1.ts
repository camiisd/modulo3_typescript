/*Actividad 1: Usar For...In para recorrer propiedades de un objeto
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un bucle for...in para recorrer y mostrar cada propiedad y su valor.*/

let estudiante: {nombre: string; edad: number; ciudad: string} = {
    nombre: 'Camila',
    edad: 31,
    ciudad: 'Ramos Mejía'
};

for (let propiedad in estudiante) {
    console.log(`Clave ${propiedad}, valor: ${estudiante [propiedad as keyof typeof estudiante]}`)
}