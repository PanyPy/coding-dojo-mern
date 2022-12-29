const { Product } = require("../models/product.model");

const catchError = (error, response) => response.json({message: "Something went wrong", error});

module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description
  })
    .then(product => response.json(product))
    .catch(error => catchError(error, response));
}

module.exports.getAllProducts = (request, response) => {
  Product.find({})
    .then(products => response.json(products))
    .catch(error => catchError(error, response));
}

module.exports.getProduct = (request, response) => {
  Product.findOne({_id:request.params.id})
    .then(product => response.json(product))
    .catch(error => catchError(error, response));
}

module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedProduct => response.json(updatedProduct))
    .catch(error => catchError(error, response));
}

module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(error => catchError(error, response));
}
