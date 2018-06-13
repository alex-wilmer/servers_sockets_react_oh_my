let express = require('express')

let app = express()

app.get('/', (request, response) => {
  response.send(`hey hey hey, I'm an express server yay`)
})

app.listen(8080, () => {
  console.log(`⚡️ server is active! ⚡️`)
})
