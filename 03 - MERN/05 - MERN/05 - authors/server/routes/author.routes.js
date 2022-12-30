const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:id', AuthorController.getAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.post('/api/author', AuthorController.createAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);

}
