import './index.scss'
import socketio from 'socket.io-client'

const socket = socketio()

window.socket = socket

socket.on('conectado', (msg) => {
  console.log(msg)
})

socket.on('fetchMensajes', mensajes => console.log(mensajes))
