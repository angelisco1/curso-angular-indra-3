const http = require('http')
const express = require('express')
const cors = require('cors')
const appRoutes = require('./routes')


const app = express()

app.use(cors({
  origin: ['http://localhost:4200']
}))

app.use(express.json())

// fn1 > fn2 > fn3 > fn4

app.use(appRoutes)



const server = http.createServer(app)

server.listen(3200, () => {
  console.log(`Listening on http://localhost:3200`)
})