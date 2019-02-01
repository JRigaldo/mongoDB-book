const assert = require('assert');
const Book = require('../src/books');

describe("Test de read", () => {
    let book1;
    beforeEach((done) => {
        book1 = new Book({title: "Harry Potter"});
        book1.save().then(() => {
            done();
        });
    });
    it("Recherche de livre par son titre", (done) => {
        Book.find({title:"Harry Potter"}).then((books) => {
            //console.log(books[0]._id);
            //console.log(book1._id);
            assert(books[0]._id.equals(book1._id));
            done();
        });
    });
});