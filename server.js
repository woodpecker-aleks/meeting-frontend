const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000

app = express()

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.listen(port)