/**Actividad 2: Exportaciones Nombradas
En el archivo stringUtils.ts, crea dos funciones:
•
capitalize(str: string): string: devuelve el string con la primera letra en mayúscula.
•
reverse(str: string): string: devuelve el string al revés.
Exporta ambas funciones como exportaciones nombradas. Luego, en main.ts, importa las funciones y utilízalas con una cadena de str, mostrando el resultado en la consola. */

import { capitalize as primeraLetra, reverse as alReves } from "./stringUtils"; //exportaciones nombradas

console.log('Primera letra en mayúscula: ', primeraLetra('camila'));
console.log('String al revés: ', alReves('divertido'))

