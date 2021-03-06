const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogBookSchema = new Schema({
    title: {type: String},
    summary: {type: String},
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]
});

const BlogBook = mongoose.model('blogBook', BlogBookSchema);

module.exports = BlogBook;




/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogBooksSchema = new Schema({
    title: {
        type : String
    },
    summary:{
        type:String
    } ,
    comments:[{
        type : Schema.Types.ObjectId,
        ref: 'comment'
    }]

});

const BlogBook = mongoose.model('blogBook',blogBooksSchema);


module.exports = BlogBook;
*/