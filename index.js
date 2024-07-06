const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log("check")
console.log("making second")
console.log("third")
console.log("fourth")

app.listen(3000)