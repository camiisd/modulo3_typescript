//Ejercicio 1
let nombre: string = 'Camila'
let edad: number = 31
let eresEstudiante: boolean = false
console.log(`Nombre: ${nombre}. Edad: ${edad}. ¿Es estudiante? ${eresEstudiante ?'Si.' :'No'}`)

console.log('\n--------------------\n')

//Ejercicio 2

let variableAny: any = 2
console.log('Variable any:',variableAny)
variableAny = '¡Hola!'
console.log('Variable any:',variableAny)

console.log('\n--------------------\n')

//Ejercicio 3
let miNombre: string = 'Camila Denise'
let miEdad: number = 31
console.log(`Mi nombre es ${miNombre} y tengo ${miEdad} años.`)

console.log('\n--------------------\n')

//Ejercicio 4
let nombres: string = 'Gonzalo'
let anios: number | undefined

if (anios !== undefined) {
    console.log(`Nombre: ${nombres}. Edad: ${anios} años.`)
} else {
    console.log(`Nombre: ${nombres}. Edad no proporcionada.`)
}

console.log('\n--------------------\n')

//Ejercicio 5
let variable: string | null = 'Soy una cadena de texto.'
console.log(variable)
variable = null
console.log('Nuevo valor: ', variable)

console.log('\n--------------------\n')

//Ejercicio 6
let valorDesconocido: unknown
valorDesconocido= '¡Soy una varible unknown!'
if(typeof valorDesconocido === 'string') {
    console.log(`El valor es un string: ${valorDesconocido}`)
}

valorDesconocido= 25
if(typeof valorDesconocido === 'number') {
    console.log(`El valor es un número: ${valorDesconocido}`)
}

valorDesconocido= true
if(typeof valorDesconocido === 'boolean') {
    console.log(`El valor es un booleano: ${valorDesconocido}`)
}

console.log('\n--------------------\n')

//Ejercicio 7
let dia: 'Lunes' | 'Martes' | 'Miércoles' = 'Miércoles'
console.log(`Hoy es ${dia}`)

//dia = 'jueves'

console.log('\n--------------------\n')

//Ejercicio 8
let a : number = 2
let b : number = 16
let c: number = a + b
console.log(c)

console.log('\n--------------------\n')

//Ejercicio 9
let requisitoAsistencia : boolean = true
let parcialesAprobados: boolean = false

let promocion: boolean = requisitoAsistencia && parcialesAprobados

console.log(`¿Puede promocionar la materia? ${promocion}`)

console.log('\n--------------------\n')

//Ejercicio 10
let cursoJS = {
    nombre: 'Nahuel',
    edad: 30,
    aprobado: false
}

console.log(`Curso de JavaScript.\n Estudiante: ${cursoJS.nombre}.\n Edad: ${cursoJS.edad}\n ¿Aprobó el curso? ${cursoJS.aprobado ? 'Sí.' : 'No.'}`)