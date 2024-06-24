const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render(__dirname + "/index.pug");
});

app.post("/", (req, res, next) => {
    if(req.body.name == "admin")
        next();
    else
        res.send("<h1 style='color:red'>You are not admin</h1>");
}, (req, res) => {
    res.send(`<h1 style='color:green'>Welcome admin</h1>`);
});
        

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
