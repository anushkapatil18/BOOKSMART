const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    ISBN: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publication: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    copies: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const BookModal = mongoose.model('book',BookSchema);

module.exports = BookModal;