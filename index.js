const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log("check")
console.log("making second")
console.log("third")

app.listen(3000)