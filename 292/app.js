const app = require('express')();

app.get('/', (req, res) => {
    res.render(__dirname + '/index.pug')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});