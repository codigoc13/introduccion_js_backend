// Declarando e inicializando una variable tipo string
let nombre = 'Medellin'
console.log(nombre)

// Reescribiendo el valor de una variable
nombre = 'Bogotá'
console.log(nombre)

// Diferentes formas de darl valor a una variable tipo string
nombre = 'Cali'
nombre = `Bello`
console.log(typeof nombre)

// Sobreescribiendo el valor y el tipo de una variable
nombre = 123
console.log(typeof nombre)

// Declarando e inicializando una variable tipo boolean
let esCiudad = false
console.log(typeof esCiudad)

// Declarando una variable tipo número (entero)
let edad = 33
console.log(typeof edad)

// Declarando una variable tipo número (decimal)
edad = 33.001
console.log(typeof edad)

// Declarando una variable tipo undefined
let cantidadDeHabitantes
console.log(typeof cantidadDeHabitantes)

// Declarando una variable tipo null
let soyNull = null
console.log(typeof soyNull)

// Declarando una variable tipo symbol
let symbol1 = Symbol('a')
let symbol2 = Symbol('a')
console.log(typeof symbol1)
console.log(symbol1 === symbol2) // Comprobando que son dos variables diferentes
