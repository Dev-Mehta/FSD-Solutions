const express = require('express');

const app = express();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'upload',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.send(`<a href="/download?file=${req.file.originalname}">${req.file.originalname}</a> uploaded successfully! <br/> Click on link to download`);
});

app.get('/download', (req, res) => {
    res.download(__dirname + `/upload/${req.query.file}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});