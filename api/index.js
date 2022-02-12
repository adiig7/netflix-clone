const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
