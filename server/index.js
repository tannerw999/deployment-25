const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 4005

app.get('/', (req, res) => { //This is setting up which end point to hit. / Is goign to be for all homepage endpoints.
    res.sendFile(path.join(__dirname, '../index.html')) //This is setting up the file path to get to the index.html.  Current directory finding the next file path needed.
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../main.js'))
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})