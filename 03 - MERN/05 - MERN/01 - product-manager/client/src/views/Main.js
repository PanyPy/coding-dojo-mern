import React, { useEffect } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';

const Main = () => {
  useEffect(()=>{
    axios.get("http://localhost:8000/api")
  }, []);

  return (
    <div>
      <ProductForm />
    </div>
  )
}

export default Main;