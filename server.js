const path = require('path')
const express = require('express')

const port = process.env.PORT || 8080
const app = express()

app.use(express.static(__dirname + '/dist'))

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(port, function () {
  console.log("Server started on port " + port)
})
