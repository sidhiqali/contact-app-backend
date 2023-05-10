const express = require('express');
const connectDB = require('./config/connection');
const errorHandler = require('./middleware/ErrorHandler');
require('dotenv').config();
connectDB()
const app = express();

const port = process.env.PORT 
app.use(express.json())
app.use('/api/contacts', require('./Routes/contactRoute'))
app.use('/api/user', require('./Routes/userRouter'))
app.use(errorHandler)
app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})