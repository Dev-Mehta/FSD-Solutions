// write a sript to meet foll requirements.
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to savesessionpage.store
// username in session.
// 3) After saving session, redirect to fetchsession page and read session
// value. put a logout link button here.
// 4) destroy the session on this page and redirect to index.html

const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({
    secret: 'secret',
}));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/savesession", (req, res) => {
    req.session.username = req.body.name;
    res.redirect("/fetchsession");
});

app.get("/fetchsession", (req, res) => {
    if(req.session.username)
    {
        res.send(`<h1>Welcome ${req.session.username}</h1><a href="/logout">Logout</a>`);
    }
    else
    {
        res.redirect("/");
    }
});
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});