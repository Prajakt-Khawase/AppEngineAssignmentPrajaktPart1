let express = require('express')
let app = express()
let url = require('url')
let timesHelloed = 0;

// get method for root call
app.get('/', (req, res) => {
    res.send('Welcome to the homepage\n') // Sending the response to browser.
})

// get method if the request comes with path /hello
app.get('/hello', (req, res) => {
    timesHelloed++; // Incrementing the timesHelloed variable by 1.
    res.send("value of timesHelloed  is " + timesHelloed) // Sending the response to browser.
})

// get method if the request comes with path /resetTimesHelloed
app.get('/resetTimesHelloed', (req, res) => {
    timesHelloed = 0; // Setting the timesHelloed variable to zero.
    res.send("value of timesHelloed has been reseted to " + timesHelloed) // Sending the response to browser.
})

// get method if the request comes with path /timesHelloed
app.get('/timesHelloed', (req, res) => {
    res.send('/ hello is called ' + timesHelloed + ' number of times.')
})

// Configuring the port value to 4001
let port = process.env.PORT || 3001
app.listen(port, () => console.log(`Example app listening on port ${port}!`))