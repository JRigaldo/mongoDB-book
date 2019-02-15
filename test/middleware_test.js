const assert = require('assert');
const mongoose = require('mongoose');
const User = require('../src/users');
const BlogBook = require('../src/blogBooks');
const Comment = require('../src/comments');

describe("Test de middleware", () => {
    it("Test que les livres soient supprimés si le user est supprimé", (done) => {

            user = new User({
                name: 'Jérémy'
            });
            blogBook = new BlogBook({
                title: 'Les fourmis',
                summary: "Les fourmis: un livre qui concerne les fourmis..."
            });
            comment = new Comment({
                content: "J'adore les fourmis !"
            });

            user.blogBooks.push(blogBook);
            blogBook.comments.push(comment);
            comment.user = user;

            Promise.all([user.save(),blogBook.save(),comment.save()]).then(() => {
                user.remove().then(() => {
                    BlogBook.count().then((count) => {
                        assert(count===0);
                        done();
                    })
                })
            })

    });
});