const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/books_test', {
        useNewUrlParser: true
    });

    mongoose.connection
        .once('open', () => {
            console.log("la connexion est établie !"); done();
        })
        .on('error', () => {
            console.warn("Erreur durant la connexion", error);
        });
});

beforeEach('Supprime les anciens livres', (done) => {
   const {books} = mongoose.connection.collections;

   books.drop( () => {
       done();
   });
});