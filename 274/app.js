const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('image'), (req, res) => {
    res.send(`${req.file.originalname} uploaded successfully`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});