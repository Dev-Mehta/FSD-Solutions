const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
        res.render(__dirname + '/form.pug');
    }
);

app.post('/login', (req, res, next) => {
    let name = req.body.name;
    let password = req.body.password;
    let message = req.body.message;
    
    html = "<h1>Form Submitted</h1>";
    html += "<p>Name: " + name + "</p>";
    html += "<p>Password: " + password + "</p>";
    html += "<p>Message: " + message + "</p>";
    html += `<a href='/show-vowel?message=${message}'>Show vowel</a>`;
    res.send(html);
});

app.get('/show-vowel', (req, res, next) => {
    let message = req.query.message;
    let vowels = message.match(/[aeiou]/gi);
    res.send("Vowels: " + vowels.length);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    }
);