const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer();

app.use(upload.fields([]));

app.use(express.json());
const port = 8081;
app.listen(port, ()=>{
    console.log(`Listening at port ${port}`)
});