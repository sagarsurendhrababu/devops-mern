const express = require('express');
const app = express();

const Poster = require('../Models/posterModel');

// Create a new poster
app.post('/posters', async (req, res) => {
    try {
        const poster = new Poster(req.body);
        await poster.save();
        res.status(201).send(poster);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all posters
app.get('/posters', async (req, res) => {
    try {
        const posters = await Poster.find().sort({ _id: -1 });
        res.status(200).send(posters);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = app;