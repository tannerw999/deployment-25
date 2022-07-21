const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
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

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', (req, res) => { //This is setting up which end point to hit. / Is goign to be for all homepage endpoints.
    res.sendFile(path.join(__dirname, '../index.html')) //This is setting up the file path to get to the index.html.  Current directory finding the next file path needed.
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../main.js'))
})

app.get ('/', (req, res) => {
    rollbar.info("Someone got the list of students to load.")
    rollbar.critical("DANGER DANGER")
    rollbar.warning("FINAL WARNING")
    try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
