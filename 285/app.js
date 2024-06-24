const express = require('express');

const app = express();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'upload',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// 50 kb file size limit
const upload = multer({ storage: storage, limits: { fileSize: 50 * 1024 } });

app.use('/upload', express.static(__dirname + '/upload'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.send(`<a href="/upload/${req.file.originalname}">${req.file.originalname}</a> uploaded successfully! <br/> Click on link to download`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});