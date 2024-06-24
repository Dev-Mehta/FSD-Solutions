const app = require('express')();
const nodemailer = require('nodemailer');
const config = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: '',
        pass: '',
    },
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/response', (req, res) => {
    config.sendMail({
        from: '',
        to: req.body.email,
        subject: 'Message from' + req.body.name,
        text: 'Hello, this is a response from the server',
    });
    res.send('Thank you for your response');
});