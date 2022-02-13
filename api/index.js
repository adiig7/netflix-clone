const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoute = require('./routes/auth');

dotenv.config({path: './config/config.env'});

connectDB();

app.use(express.json());

app.use("/api/auth", authRoute); 

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
