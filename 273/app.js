// Write an express.js script to send automatic mail to specified user

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.get('/sendmail', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'marusachugmailid@gmail.com',
            pass: 'verysecurepassword@123',
        },
    });
    transporter.sendMail({
        from: '',
        to: req.query.email,
        subject: `Congratulations! IQ Test Result is out.`,
        text: `According to our very accurate AI models, you have scored -43 IQ points. You are a genius!`,
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
