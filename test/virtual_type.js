const assert = require('assert');
const User = require('../src/users');

describe("Test de virtual type", () => {
    it("Test de virtual type countBooks", (done) => {
        const user1 = new User({
            name: 'Mickey',
            books: [
                {title: "Le seigneur des anneaux"},
                {title: "Les raisins de la colère"}
            ]
        });
        user1.save()
            .then(() => {
                User.findOne({name: 'Mickey'})
                    .then((user)=>{
                        assert(user.countBooks === 2);
                        done();
                    });
            });
    });
});