const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
    if(req.body.password == req.body.confirm_password){
        res.send(`<h1 style='color:green'>Name: ${req.body.name}<br/>Gender: ${req.body.gender}</h1>`);
    }
    else{
        res.send("<h1 style='color:red'>Password did not match</h1>");
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
