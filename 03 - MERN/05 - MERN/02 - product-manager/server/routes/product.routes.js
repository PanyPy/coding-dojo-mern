const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getProduct);
    app.post('/api/product', ProductController.createProduct);
}

// const JokeController = require("../controllers/joke.controller");

// module.exports = app => {
//   app.get("/api/jokes/", JokeController.findAllJokes);
//   app.get("/api/jokes/random", JokeController.findRandomJoke);
//   app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
//   app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
//   app.post("/api/jokes/new", JokeController.createNewJoke);
//   app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
// };