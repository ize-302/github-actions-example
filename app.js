const express = require('express')
require('dotenv').config();
const app = express()
const { PORT } = process.env

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Hello World' })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

module.exports = app;