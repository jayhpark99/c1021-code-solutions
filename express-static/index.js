const express = require('express')
const path = require('path')
const app = express()

const absoluteUrl = path.join(__dirname, 'public')
app.use(express.static(absoluteUrl))

app.listen(3000, () => console.log('listening on 3000'))
