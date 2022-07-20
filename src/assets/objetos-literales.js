// Crando un objeto literal
let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  estaVivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California',
  },
  'ultima-pelicula': 'Infinity War',
}

// Accediendo al objeto literal y a sus propiedades
console.log(personaje)
console.log(`Nombre: ${personaje.nombre}`)
console.log(`Nombre: ${personaje['nombre']}`)
console.log(`Edad: ${personaje.edad}`)
console.log(`Latitud: ${personaje.coords.lat}`)

const x = 'estaVivo'
console.log(`Esta vivo: ${personaje[x]}`)
console.log(`Esta vivo: ${personaje['ultima-pelicula']}`)

// Borrando una propiedad del objeto
delete personaje.edad
console.log(`Edad: ${personaje.edad}`)

// Creando una nueva propiedad para un objeto
personaje.casado = true
console.log({ personaje })

// Bloqueando el objeto externo para que no se pueda modificar
// Si se desea bloquear objetos internos, se debe proceder con el bloque individual
Object.freeze(personaje)

// Estas propiedades no serán agregadas ni cambiadas
// ya que bloqueé esa posibilidad con la instrucción anterior
personaje.dinero = 10000000
personaje.estaVivo = true
console.log({ personaje })

// Convirtiendo cada clave valor en un array
const entriesPares = Object.entries(personaje)
console.log(entriesPares)

// Obteniendo solo las propiedades
const propiedades = Object.getOwnPropertyNames(personaje)
console.log(propiedades)

// Obteniendo solo los valores
const valores = Object.values(personaje)
console.log(valores)
