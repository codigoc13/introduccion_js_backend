// Declarando un arreglo de string con personajes de comics
let personajes = ['Ironman', 'Batman', 'Superman', 'Antman', 'Thor']

// Hallando la longitud del arreglo y jugando con las posiciones de los elementos
console.log('tamaño - largo:', personajes.length)

let primero = personajes[0]
let ultimo = personajes[personajes.length - 1]

console.log({ primero, ultimo })

// Recorriendo cada elemento del array
personajes.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr })
})

// Agregando un nuevo elemento al array en la parte final del mismo
let nuevaLongitud = personajes.push('Hulk')
console.log({ nuevaLongitud, personajes })

// Agregando un nuevo elemento al inicio del array
nuevaLongitud = personajes.unshift('Black Widow')
console.log({ nuevaLongitud, personajes })

// Borrando el último elemento del arreglo
let personajeBorrado = personajes.pop()
console.log({ personajeBorrado, personajes })

// Removiendo varios personajes a la vez
let pos = 1
console.log(personajes)
let personajesBorrados = personajes.splice(pos, 2)
console.log({ personajesBorrados, personajes })

// Saber la posición o índice de un personaje
let thorIndex = personajes.indexOf('Thor') //¡Es casesensitive!
console.log(thorIndex)
