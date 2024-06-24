const express = require('express');

const app = express();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'File',
    filename: (req, file, cb) => {
        cb(null, 'data-file.pdf')
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
});

app.post('/upload', upload.single('data'), (req, res) => {
    res.send(`${req.file.originalname} uploaded successfully!`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});