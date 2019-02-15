const assert = require('assert');
const User = require('../src/users');

describe("Relation test", () => {
    it("Test de la taille de la liste de livre dans un user", (done) => {
        const user1 = new User({
            name: 'Jérémy',
            books: [{title: "Le siegneur des anneaux"}, {title: "les raisins de la colère"}]
        });
        user1.save().then(() => User.findOne({name:'Jérémy'})
            .then((user) => {
               assert(user.books.length === 2);
               done();
            })
        )
    });
    it("Ajout de livre à user", (done) => {
       const user1 = new User({
           name: 'Robin'
       });
       user1.books.push({title: "Le seigneur des anneaux"});
       user1.save().then(() => User.findOne({name: 'Robin'}).then((user) => {
           assert(user.books.length === 1);
           done();
       }))
    });
    it("Suppression de livre d'un user", (done) => {
        const user1 = new User({
            name: 'Robin',
            books: [{title: "Le siegneur des anneaux"}, {title: "les raisins de la colère"}]
        });
        user1.books[0].remove();
        user1.save().then(() => User.findOne({name: 'Robin'}).then((user) => {
            assert(user.books.length === 1);
            done();
        }))
    });
});