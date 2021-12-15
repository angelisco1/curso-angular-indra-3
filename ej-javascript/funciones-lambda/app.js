const series = [
  { titulo: 'Serie 1', vista: true, numEpisodios: 30 },
  { titulo: 'Serie 2', vista: true, numEpisodios: 180 },
  { titulo: 'Serie 3', vista: false, numEpisodios: 70 },
  { titulo: 'Serie 4', vista: true, numEpisodios: 12 },
  { titulo: 'Serie 5', vista: false, numEpisodios: 180 },
  { titulo: 'Serie 6', vista: false, numEpisodios: 47 },
]

const seriesVistas = series.filter((serie) => {
  return serie.vista
})

console.log({seriesVistas})

const titulosSeriesVistas = seriesVistas.map(serie => serie.titulo).join(', ')

console.log({titulosSeriesVistas})

const seriesVistas2 = []
series.forEach(serie => {
  if (serie.vista) {
    seriesVistas2.push(serie.titulo)
  }
})

console.log({seriesVistas2})

const serieMuyLarga = series.find(serie => serie.numEpisodios > 100)
console.log({serieMuyLarga})

const maxEpisodios = Math.max(...series.map(s => s.numEpisodios))
console.log({maxEpisodios})

const serieConMasEpisodios = series.find(serie => serie.numEpisodios === maxEpisodios)
console.log({serieConMasEpisodios})


const numTotalEpisodiosVistos = series.reduce((acc, serie) => {
  console.log(acc)
  const num = serie.vista ? serie.numEpisodios : 0
  return acc += num
}, 0)

console.log({numTotalEpisodiosVistos})


// console.log(new Array(16).fill(0))