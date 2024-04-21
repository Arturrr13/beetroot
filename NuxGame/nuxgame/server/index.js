const express = require('express')
const app = express()
const WSServer = require('express-ws')(app)
const aWss = WSServer.getWss()

const PORT = process.env.PORT || 5050

app.ws('/', (ws, req) => {
    ws.on('message', (ms) => {
        ms = JSON.parse(ms)
        if(ms.type === 'message' || ms.type === 'image') sendMessage(ms)
        if(ms.type === 'connection') ws.id = ms.id
    })
})

app.listen(PORT, () => console.log(PORT))

const sendMessage = (data) => {
    aWss.clients.forEach(client => {
        if(data.type === 'message') client.send(JSON.stringify({ message: data.value, id: data.userID }))
        if(data.type === 'image') client.send(JSON.stringify({ image: data.value, id: data.userID }))
    })
}