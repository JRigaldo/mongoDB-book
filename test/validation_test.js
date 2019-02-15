const assert = require('assert');
const Book = require('../src/books');

describe("Test de validation", () => {
    it("Un titre doit 'etre requis", (done) => {
        const book1 = new Book({title: undefined});
        // SYNCRONE
        const validateResult = book1.validateSync();
        const {message} = validateResult.errors.title;
        assert(message === 'Requeried title' );
        done();
        // ASSYNCRONE
        // book1.validate((validateInfo) => {});
    });
    it("Un livre doit avoir moins de 3000 pages", (done) => {
        // ASSYNCRONE
        const book1 = new Book({title: 'Les fleurs du mal', totalPages: 3001});
        book1.validate((validationResult) => {
            const {message} = validationResult.errors.totalPages;
            assert(message === "Un livre doit avoir moins de 3000 pages" );
            done();
        });
    });
});