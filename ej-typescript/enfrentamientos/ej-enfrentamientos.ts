import _ from './node_modules/underscore/underscore.js' // ES Modules
// const _ = require('underscore') // CommonJS

const equipos = ['R. Madrid', 'Betis', 'Valencia', 'Villarreal']
/**
 * R. Madrid vs Betis
 * Villarreal vs Valencia
*/
/**
 * Valencia vs Betis
 * R. Madrid vs Villarreal
*/

const equiposImpares = ['R. Madrid', 'Betis', 'Valencia', 'Villarreal', 'Sevilla']
/**
 * R. Madrid vs Betis
 * Villarreal vs Valencia
 * Sevilla pasa a la siguiente ronda
*/
/**
 * Sevilla vs Betis
 * Valencia vs Villarreal
 * R. Madrid pasa a la siguiente ronda
*/

// const fn4 = (p1: string): Array<string> => ['']
// Desestructuración
// Rest Operator
// Recursión

// Muestra por consola los enfrentamientos
function getEnfrentamientos(equipos: Array<string>): void {

  if (equipos.length < 2) {
    if (equipos.length === 1) {
      console.log(equipos[0] + ' pasa a la siguiente fase')
    }
  } else {
    const [ equipo1, equipo2, ...restoEquipos ] = equipos
    console.log(equipo1 + ' vs ' + equipo2)

    getEnfrentamientos(restoEquipos)
  }
}

// Devuelve un array de equipos con el orden cambiado
function shuffle(equipos: Array<string>): Array<string> {
  const arrResultado = []
  for (let i = equipos.length - 1; i >= 0; i--) {
    const pos = Math.floor(Math.random() * equipos.length)
    const equipo = equipos[pos]
    arrResultado.push(equipo)
    equipos.splice(pos, 1)
  }
  return arrResultado
}

// function shuffle (equipos: string[]): string[]{
//   equipos.sort(function() { return Math.random() - 0.5 });
//   return equipos;
// }



getEnfrentamientos(shuffle(equipos))

getEnfrentamientos(_.shuffle(equiposImpares))