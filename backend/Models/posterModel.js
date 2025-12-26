const mongoose = require('mongoose');
const posterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,   
        required: true
    }
},{timestamps: true}); 
const Poster = mongoose.model('Poster', posterSchema);
module.exports = Poster;
