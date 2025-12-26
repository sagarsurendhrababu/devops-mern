require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const posterRouter = require('./Routers/posterRouter');

app.use(express.json());
app.use(cors());
app.use('/api', posterRouter);

mongoose.connect(process.env.DB)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running`);
});

