import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
      .then(response=>{
        console.log(response);
        setProducts(response.data);
      });
  },[])

  return (
    <div>
      <ProductForm />
      <hr/>
      {products && <ProductList products={products}/>}
    </div>
  )
}

export default Main;