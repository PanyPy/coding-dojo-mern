import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + props.match.params.id)
      .then(response => setProduct({
          ...response.data
      }))
  }, [])

  return (
    <div>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
    </div>
  )
}

