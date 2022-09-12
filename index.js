require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Choo Choo! This is an example of ExpressJS running on Railway.')
})


app.listen(process.env.port, () => {
    console.log(`Hey there! This ExpressJS example instance is now running on port: ${process.env.port}`)
})
