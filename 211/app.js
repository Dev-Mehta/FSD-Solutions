const express = require("express");

const app = express();

app.get("/sorted-names", (req, res) => {
    const obj = [
        { name: "John", age: 25 },
        { name: "Jane", age: 24 },
        { name: "Jim", age: 30 },
    ];
    const sorted = obj.sort((a, b) => a.age - b.age);
    res.send(sorted);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});