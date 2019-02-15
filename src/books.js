const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {type: String, required: [true, 'Requeried title']},
    totalPages: {
        type: Number,
        default: 0,
        validate: {
            validator: (totalPages) => totalPages < 3000,
            message: "Un livre doit avoir moins de 3000 pages"
        }
    }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;