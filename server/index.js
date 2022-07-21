const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4005

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'fbbe4bedaf924dfe99c8a95c8777ddda',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')
// /This is setting up which end point to hit. / Is goign to be for all homepage endpoints.
app.get('/', (req, res) => {
    rollbar.info("Someone loaded up your html!.")
    // rollbar.critical("DANGER DANGER")
    // rollbar.warning("FINAL WARNING")
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
