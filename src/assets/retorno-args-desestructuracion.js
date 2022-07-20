// Generando un return con varios valores
function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  }
}

const persona = crearPersona('Alejandro', 'Montes')
console.log({ persona })

// Otra forma de generar un return con varios valores
function crearPersona2(nombre, apellido) {
  return {
    nombre,
    apellido,
  }
}

const persona2 = crearPersona2('Alejandro', 'Montes')
console.log({ persona2 })

//Otra forma
const crearPersona3 = (nombre, apellido) => {
  return {
    nombre,
    apellido,
  }
}

const persona3 = crearPersona3('Alejandro', 'Montes')
console.log({ persona3 })

//Otra forma
const crearPersona4 = (nombre, apellido) => ({ nombre, apellido })

const persona4 = crearPersona4('Alejandro', 'Montes')
console.log({ persona4 })

//Pasando argumentos
const argumentos = (...args) => {
  return args
}

const args = argumentos(10, true, false, 'Sergio', 'Manrique')
console.log(args)

// Desestructurando
const otrosArgumentos = [10, true, false, 'Sergio', 'Manrique']

const [cantidad, activo, descuento, nombre, apellido] = otrosArgumentos

console.log({ cantidad, descuento })

// Más desestructuración
let tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  estaVivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}

const imprimePropiedades = (personaje) => {
  console.log(`nombre: ${personaje.nombre}`)
  console.log(`codeName: ${personaje.codeName}`)
  console.log(`estaVivo: ${personaje.estaVivo}`)
  console.log(`edad: ${personaje.edad}`)
  console.log(`trajes: ${personaje.trajes}`)
}

imprimePropiedades(tony)

const imprimePropiedadesDes = ({
  nombre,
  codeName,
  estaVivo,
  edad,
  trajes,
}) => {
  console.log({ nombre })
  console.log({ codeName })
  console.log({ estaVivo })
  console.log({ edad })
  console.log({ trajes })
}

imprimePropiedadesDes(tony)
