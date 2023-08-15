import React from 'react'

const ProductList = props => {
  return (
    <div>
      {props.products.map((product, idx)=>{
        return <p key={idx}>{product.title}, {product.price} {product.description}</p>
      })}
    </div>
  )
}

export default ProductList;
