let express = require('express')
let app = express()
let url = require('url')

let timesHelloed = 0;

app.get('/', (req, res) => {
      
      res.send('Welcome to the homepage\n')
    })

app.get('/hello', (req, res) => {
    timesHelloed++;
    res.send("value of timesHelloed  is " + timesHelloed)
})

app.get('/resetTimesHelloed', (req, res) => {
    timesHelloed = 0;
    res.send("value of timesHelloed has been reseted to " + timesHelloed)
})

app.get('/timesHelloed', (req, res) => {
    res.send('/ hello is called ' + timesHelloed +' number of times.')
})

let port = process.env.PORT || 3001
app.listen(port, () => console.log(`Example app listening on port ${port}!`))