// thingy to get server ip address
let publicIp = require('public-ip')

// express === node's goto http server
let express = require('express')
let app = express()

// middleware to add "cors" headers
let cors = require('cors')
app.use(cors())

// PORT from environment variable with default
let port = process.env.PORT || 8080

// send a string to all requestors 
app.get('*/:text', (request, response) => {
  console.log(`🍆 somebody said: ${request.params.text}`)
  response.send(`hey hey hey, I'm an express server yay`)
})

// get the server's public ip
publicIp.v4().then(ip => {
  // activate the server (will hang the node process)
  app.listen(port, () => {
    console.log(`
     ⚡️ server activated! ⚡️
     get a string from http://${ip}:${port}
    `)
  })
})

