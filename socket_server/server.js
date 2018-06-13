// thingy to get server ip address
let publicIp = require('public-ip')

let WebSocket = require('ws')

let port = process.env.PORT || 8080
let wss = new WebSocket.Server({ port })

wss.on('connection', ws => {
  console.log(`⚡️ new connection!!`)
  ws.send(`you connected succesfully! ✨'`)

  ws.on('message', message => {
    console.log(`somebody said: ${message}`)

    wss.clients.forEach(client => {
      client.send(message);
    })
  })
})


publicIp.v4().then(ip => {
  console.log(`👂 listening on ws://${ip}:${port}`)
})

