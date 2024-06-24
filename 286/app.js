const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render(__dirname + '/index.pug')
})

app.get('/about', (req, res) => {
    res.render(__dirname + '/about.pug')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
