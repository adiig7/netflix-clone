const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

dotenv.config({path: './config/config.env'});

connectDB();

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute); 
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});


