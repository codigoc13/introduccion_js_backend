// Definiendo una función de manera tradicional
// Es buena práctica crear las funciones al inicio del código
function saludar() {
  console.log('Hola Mundo')
}

// Usando o llamando a una función
saludar()

// Reutilizando la función
saludar()

// Buena practica a la hora de declarar funciones hacerlo con la palabra reservada const
const saludar2 = function () {
  console.log('Hola Mundo de otra forma')
}
// lo anterior es conocido como una función anónima

saludar2()
saludar2()

// Enviando argumentos a las funciones
const saludar3 = function (nombre) {
  console.log(`Hola ${nombre}`)
}

saludar3()
saludar3('Sergio')
saludar3('Hanna')

// Funciones de flecha
const saludarFlecha = () => {
  console.log('Hola flecha')
}

saludarFlecha()

// Argumentos en funciones flecha
const saludarFlecha2 = (nombre) => {
  console.log(`Hola ${nombre}`)
}

saludarFlecha2('Marcos')

//Función con retorno
const saludarConRetorno = (nombre) => {
  return `Hola ${nombre}`
}

let saludando = saludarConRetorno('Amanda')
console.log(saludando)

//Otra forma de escribir una función de flecha cuando solo se tiene una línea (return)
const sumar = (a, b) => a + b

console.log(sumar(2, 3))

// Función de números aleatorios
function getAleatorio() {
  return Math.random()
}
