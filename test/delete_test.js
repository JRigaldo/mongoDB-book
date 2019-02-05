const assert = require('assert');
const Book = require('../src/books');

describe("Delete test", () => {
    let book1;
    beforeEach((done) => {
        book1 = new Book({title: "Odyssée"});
        book1.save().then(() => {
            done();
        });
    });
    function assertDelete(promise, done){
        promise.then(() => {
            Book.findOne({title: 'Odyssée'}).then((book) => {
                assert(book === null);
                done();
            })
        })
    }
    it("Suppression d'un livre par son instance", (done) => {
        assertDelete(book1.remove(), done);
    });
    it("Suppression d'un livre par le model", (done) => {
        assertDelete(Book.remove({title: 'Odyssée'}), done);
    });
    it("Recherche par son titre et remove (findOneAndRemove)", (done) => {
       assertDelete(Book.findOneAndRemove({title: 'Odyssée'}), done);
    });
    it("Recherche par son id et remove (findByIdAndRemove)", (done) => {
        assertDelete(Book.findByIdAndRemove(book1._id), done);
    });
});