const http = require('http')
const express = require('express')
const cors = require('cors')
const appRoutes = require('./routes')
const SocketIO = require('socket.io')
const emitter = require('./utils/emitter')

const app = express()

app.use(cors({
  origin: ['http://localhost:4200']
}))

app.use((req, res, next) => {
  console.log(1, req.body)
  next()
})

app.use(express.json()) // Guarda los datos que van en el cuerpo de las peticiones dentro de req.body como objeto de JS

app.use((req, res, next) => {
  console.log(2, req.body)
  next()
})

// fn1 > fn2 > fn3 > fn4

app.use(appRoutes)


app.use(() => {
  console.log('FIN')
})

const server = http.createServer(app)

const io = SocketIO(server, {
  cors: {
    origin: '*'
  }
})

io.on('connection', (socket) => {
  console.log(`Se ha conectado alguien nuevo con el id ${socket.id}`)

  emitter.on('noticiaCreada', (noticia) => {
    socket.emit('nuevaNoticia', noticia)
  })

})


server.listen(3200, () => {
  console.log(`Listening on http://localhost:3200`)
})