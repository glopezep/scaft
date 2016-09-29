import express from 'express'
import { createServer } from 'http'
import socketio from 'socket.io'

const port = 3000
const app = express()
const server = createServer(app)
const io = socketio(server)
let mensajes = []

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send(200)
})

app.get('/hola', (req, res) => {
  res.send(200)
})

io.on('connection', socket => {
  console.log(`a user connected ${socket}`)
  io.emit('fetchMensajes', mensajes)
  socket.on('disconnect', () => console.log('a user disconnect'))
  socket.on('conectado', (msg) => {
    mensajes.push(msg)
    io.emit('conectado', msg)
  })
})


server.listen(port, () => console.log(`Server listening on port ${port}`))
