import './index.scss'
import React from 'react'
import { render } from 'react-dom'
import socketio from 'socket.io-client'
import { Provider } from 'react-redux'
import store from './store'
import AppBox from './containers/AppBox'

const app = document.getElementById('App')

render(
  <Provider store={store}>
    <AppBox/>
  </Provider>
,app)

const socket = socketio()
window.socket = socket
socket.on('conectado', (msg) => {
  console.log(msg)
})
socket.on('fetchMensajes', mensajes => console.log(mensajes))
