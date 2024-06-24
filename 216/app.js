// write an express.js script to use of routing method using home , about ,
// contact , temp page and print message. /home- welcome to my home
// page , /about -welcome to my about page, /contact-welcome to my
// contact page ,/temp - welcome to my temp page

const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

router.get('/:path', (req, res) => {
    let path = req.params.path;
    if (path === 'home') {
        res.send('welcome to my home page');
    } else if (path === 'about') {
        res.send('welcome to my about page');
    } else if (path === 'contact') {
        res.send('welcome to my contact page');
    } else if (path === 'temp') {
        res.send('welcome to my temp page');
    }
});

app.use('/', router);
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});