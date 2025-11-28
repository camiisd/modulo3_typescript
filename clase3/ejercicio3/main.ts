/*Actividad 3: Exportación por Defecto
Crea un módulo llamado user.ts que contenga una función:
•
createUser(name: string, age: number): devuelve un objeto con name y age.
Exporta la función como exportación por defecto. En main.ts, importa createUser, crea un usuario y muestra su información en la consola.*/

import createUser from "./user";

console.log(createUser('Nahuel', 30))