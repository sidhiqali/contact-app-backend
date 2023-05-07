const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT ||3000

app.use('/api/contacts', require('./Routes/contactRoute'))


app.listen(port, ()=>{
    console.log(`server running on port${port}`);
})