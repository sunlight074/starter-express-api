const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('hello world')
})

app.post('/api/scholarship/login', (req, res) => {
    console.log("Just got a request!")
    res.send({result : {accessToken : 'hello accessToken'}})
})
app.listen(process.env.PORT || 3000)