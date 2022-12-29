import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = props => {
  const [ products, setProducts ] = useState([]);

  // skip deleted products
  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId));
  }
  // if we create a new Product, we just reload products (in case there are side effects in DB)
  // fetch products
  const loadProducts = () => {
    axios.get('http://localhost:8000/api/products')
      .then(response=>{
        setProducts(response.data);
    });
  };

  useEffect(()=>{
    loadProducts();
  },[])

  return (
    <div>
      <ProductForm loadProducts={ loadProducts } />
      <hr/>
      {products && <ProductList products={ products } removeFromDom={ removeFromDom } />}
    </div>
  )
}

export default Main;