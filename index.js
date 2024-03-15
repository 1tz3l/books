const express = require('express')
const libros = express()
const port = 3000


libros.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})