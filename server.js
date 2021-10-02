const express = require('express').Router();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouts', {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require('./routes/api'));
app.use(require('./routes/html'));