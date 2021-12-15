// Transpilar a JS
// tsc nombre-archivo.ts
let a: number = 1
console.log(a)

function fn() {
  let b = 1; // Variables de bloque
  var c = 1;
  if (true) {
    let b = 2;
    var c = 2;
    console.log(b)
    console.log(c)
  }
  console.log(b)
  console.log(c)
}

fn()

a = 9

const NUM_MAX = 4
// NUM_MAX = 0



// Tipos de datos
const unNumero: number = 3
const unTexto: string = 'Un texto'
const esVerdad: boolean = true

// let otroDato = 'Otro texto'
// otroDato = 9

// Variable de múltiples tipos
let esNull: string | null | number = null;
// esNull = 0
// esNull = false

// Nuestro propio tipo de dato
type StrONullONum = string | null | number
const texto1: StrONullONum = null


const arrNumeros1: Array<number> = [1, 2, 3, 4]
const arrNumeros2: number[] = [1, 2, 3, 4]

let cualquierTipo: any = 4
cualquierTipo = 'un texto'
cualquierTipo = false
cualquierTipo = [1, '', true]

interface Persona {
  nombre: string,
  apellidos: string,
  email: string,
  fechaNacimiento?: Date
}

const falco: Persona = {
  nombre: 'Charles',
  apellidos: 'Falco',
  email: 'c.falco@gmail.com',
  fechaNacimiento: new Date(1980, 2, 12),
  // dni: '00000000T'
}

const mesesES = ['Enero', 'Febrero', 'Marzo', 'Abril']
console.log(mesesES[falco.fechaNacimiento.getMonth()])
console.log(falco.fechaNacimiento)

interface Actor extends Persona {
  // nombre: string,
  // apellidos: string,
  // email: string,
  // fechaNacimiento: Date,
  peliculas: Array<string>
}

const jsonStatham: Actor = {
  nombre: 'JSON',
  apellidos: 'Statham',
  email: 'json.statham@gmail.com',
  // fechaNacimiento: new Date(),
  peliculas: ['The expendables', 'Transporter']
}

const yamlStatham: Actor = {
  nombre: 'YAML',
  apellidos: 'Statham',
  email: 'yaml.statham@gmail.com',
  // fechaNacimiento: new Date(),
  peliculas: ['The expendables', 'Transporter']
}

// ... Rest Operator
// function getNumLoteria(idSorteo: number, n1: number, n2: number, n3: number, n4: number, n5: number, n6?: number): string {
function getNumLoteria(idSorteo: number, ...nums: Array<number>): string {
  const sorteos = ['La primitiva', 'El euromillón', 'La bonoloto']
  console.log(nums)
  return 'Sorteo ' + sorteos[idSorteo] + ' - ' + nums.join(', ')
}

const resultado = getNumLoteria(1, 3, 12, 17, 28, 39, 46)
console.log(resultado)

function getNumLoteria2(idSorteo: number, nums: Array<number>): string {
  const sorteos = ['La primitiva', 'El euromillón', 'La bonoloto']
  return 'Sorteo ' + sorteos[idSorteo] + ' - ' + nums.join(', ')
}
const resultado2 = getNumLoteria2(1, [3, 12, 17, 28, 39, 46])
console.log(resultado2)


// VALORES POR REFERENCIA
const series = ['Hunters', 'Gangland Undercover', 'Vikings']
const series2 = series
series2.push('The Walking Dead')

console.log(series) // ['Hunters', 'Gangland Undercover', 'Vikings', 'The Walking Dead']
console.log(series2) // ['Hunters', 'Gangland Undercover', 'Vikings', 'The Walking Dead']

// Antes del spread operator
const series3 = [].concat(series)
series3.push('Taboo')
console.log(series) // ['Hunters', 'Gangland Undercover', 'Vikings', 'The Walking Dead']
console.log(series3) // ['Hunters', 'Gangland Undercover', 'Vikings', 'The Walking Dead', 'Taboo']

const series4 = series.slice()
series4.push('The leftovers')
console.log(series) // ['Hunters', 'Gangland Undercover', 'Vikings', 'The Walking Dead']
console.log(series4) // ['Hunters', 'Gangland Undercover', 'Vikings', 'The Walking Dead', 'Taboo']

// Con el Spread Operator ...
const series5 = [...series, 'La casa de papel']
// const series6 = [series]
console.log(series5)
// console.log(series6)

// const xmlStatham = {...jsonStatham}
// xmlStatham.nombre = 'XML'
const xmlStatham = {...jsonStatham, nombre: 'XML'}

console.log(jsonStatham)
console.log(xmlStatham)

const xmlStatham2 = Object.assign({}, jsonStatham, {nombre: 'XML', telefono: '678383923'})
console.log(xmlStatham2)


// Optional Chaining Operator
const datosPersona = {
  direccion: {
    tipo: 'calle',
    numero: 8,
    nombre: 'nombre'
  },
  telefonos: {
    fijo: {
      prefijo: '+34',
      numero: '922782939'
    },
    movil: {
      prefijo: '+34',
      numero: '622782939'
    }
  }
}

console.log(datosPersona.telefonos.movil.numero)

const datosPersona2 = {
  direccion: {
    tipo: 'calle',
    numero: 8,
    nombre: 'nombre'
  },
  telefonos: {
    fijo: {
      prefijo: '+34',
      numero: '922782939'
    }
  }
}

// if (datosPersona2 && datosPersona2.telefonos && datosPersona2.telefonos.movil && datosPersona2.telefonos.movil.numero) {
//   console.log(datosPersona2.telefonos.movil.numero)
// }
console.log(datosPersona2?.telefonos?.movil?.numero || 'No tiene movil')


// Desestructuración de arrays y objetos
// const direccion = datosPersona2.direccion
// const telefonos = datosPersona2.telefonos

// const { direccion, telefonos } = datosPersona2
const { direccion: dir, telefonos } = datosPersona2
dir.tipo = 'avenida'
console.log(datosPersona2.direccion)
console.log(dir)

const colores = ['blanco', 'negro', 'gris']
const [ , negro, g ] = colores
console.log(g)


// class Persona {
//   nombre: string;
//   apellidos: string;

//   constructor(nombre: string, apellidos: string) {
//     this.nombre = nombre
//     this.apellidos = apellidos
//   }

// }
class Persona {
  constructor(public nombre: string, public apellidos: string) {}
}









// Clonar instancia de clases