// Write an express js script to configure the multer middleware. Perform following tasks.
// 1) Create a pug file named "file.pug". This file contains heading(h3) "Upload your CV" in red
// color. And, a form with input type file(to browse and select file) and submit(to upload the file).
// 2) Create a js file named "file.js" and link this js and pug file to browse pug file on "/home"
// page.
// 3) After uploading a file display message on "/upload" page "(file original name) has been
// uploaded".
// 4) Save uploaded files to specific directory named "upload". And in this folder file must be
// stored in format of "lju-file.pdf" where "lju" is the field name. 

const express = require('express')
const app = express()

const multer = require('multer')
const diskStorage = multer.diskStorage({
    destination: 'upload/',
    filename: (req, file, cb) => {
        cb(null, 'lju-file.pdf')
    }
})
const upload = multer({ storage: diskStorage })
app.set('view engine', 'pug')

app.get('/home', (req, res) => {
    res.render(__dirname + '/file.pug')
});

app.post('/upload', upload.single('lju'),(req, res) => {
    res.send(req.file.originalname + ' has been uploaded');
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
});