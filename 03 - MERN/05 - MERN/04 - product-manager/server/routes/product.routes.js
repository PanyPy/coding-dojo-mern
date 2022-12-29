const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.post('/api/product', ProductController.createProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);

}
