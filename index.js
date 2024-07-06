const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer();

app.use(upload.fields([]));

app.use(express.json());


const port = 8081;


const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/config'
).then(()=>{
console.log('db connected successfully ')
}).catch(error=>{
 console.log('db connect time error', error)
})

const aishu = mongoose.Schema({
    name:String,
    email:String
})

const dbInsert = async (aishu,record)=>{
    const newRecord = new aishu(record);
    await newRecord.save();
    return newRecord;
}

app.get('/', (req, res)=>{
    res.send({'Hello': 'world', 'name': req.query.name, "age": req.query.age})
})

app.get('/user', (req, res)=>{
    res.send([])
})

app.get('/user/:id', (req, res)=>{
    const params = req.params;
    res.send(params)
})

app.post('/user', (req, res)=>{
    console.log(req.body)
    res.send({
        "message": "User created"
    })
})

app.put('/user/:id', (req, res)=>{})

app.patch('/user/:id', (req, res)=>{})

app.delete('/user/:id', (req, res)=>{})

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`)
});