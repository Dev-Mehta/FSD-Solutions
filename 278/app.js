const app = require('express')();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render(__dirname + '/index.pug', { title: 'Hey', message: 'Hello there!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});