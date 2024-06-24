const app = require('express')();
const nodemailer = require('nodemailer');
const config = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'lju@gmail.com',
        pass: '',
    },
});

app.get('/', (req, res) => {
    config.sendMail({
        from: 'lju@gmail.com',
        to: ['student@gmail.com', 'faculty@gmail.com'],
        subject: 'LJ University',
        text,
        html: `<h3>Welcome to LJ University</h3><table border="1"><tr><th>Date</th><th>Exam Name</th></tr><tr><td>28/06/2023</td><td>FSD-2</td></tr></table>`
    });
    res.send('Thank you for your response');
});