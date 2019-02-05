const assert = require('assert');
const Book = require('../src/books');

describe("Test de read", () => {
    let book1;
    let newTitle = "Game of Thrones";
    beforeEach((done) => {
        book1 = new Book({title: "Moby Dick"});
        book1.save().then(() => {
            done();
        })
    });

    function assertTitle(promise, done){
        promise.then(() => {
           Book.find({}).then((books) => {
               assert(books[0].title === newTitle);
               done();
           });
        });
    }

    it("Update depuis l'instance", (done) => {
        //Nom du champ, nom de la valeur
        book1.set("title", newTitle);
        //book1.save();
        assertTitle(book1.save(), done);
        //done();
    });
    it("Update depuis le model", (done) => {
        //Book.update({title: "Moby Dick"}, {title: newTitle});
        assertTitle(Book.update({title: "Moby Dick"}, {title: newTitle}), done);
        //done();
    });
    it("Recherche un livre par son titre et update(findOneAndUpdate)", (done) => {
        assertTitle(Book.findOneAndUpdate({title: "Moby Dick"}, {title: newTitle}), done);
    });
    it("Recherche un livre par son id et update(findByIdAndUpdate)", (done) => {
        assertTitle(Book.findByIdAndUpdate(book1._id, {title: newTitle}), done);
    });
    it("Recherche son livre et incrémente son nombre de page", (done) => {
        Book.update({title: 'Moby Dick'}, {$inc: {totalPages: 3}})
            .then(() => Book.findOne({title: 'Moby Dick'}))
            .then( (book) => {
                assert(book.totalPages === 3);
                done();
            })
    })
});