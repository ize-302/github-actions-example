const express = require('express')
require('dotenv').config();
const app = express()
const { PORT } = process.env

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})