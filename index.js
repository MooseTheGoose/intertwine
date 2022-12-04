const express = require('express')
const app = express()
const port = 8080

app.set('views', './views')
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index', {title: 'Intertwine', message: 'Hello, World!'})
})
app.listen(port, () => {
  console.log(`Interwine listening on port ${port}`)
})
