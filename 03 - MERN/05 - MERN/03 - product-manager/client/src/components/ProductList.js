import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default props => {
  const { removeFromDom } = props;
  const deleteProduct = (productId) => {
    axios.delete('http://localhost:8000/api/product/' + productId)
      .then(response => removeFromDom(productId))
  }

  return (
    <div >
      <table className="table">
        <thead>
          <tr>
            <th scope="col"># (for demo)</th> 
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, idx)=>
          ( <tr key={idx}>
              <th scope="row"><Link to={"/" +product._id}>{product._id} </Link></th>
              <th scope="row">{product.title}</th>
              <th scope="row">{product.price}</th>
              <th scope="row">{product.description}</th>
              <th scope="row">
                <Link className="btn btn-default" to={`/${product._id}/`}>View</Link>
                <Link className="btn btn-success" to={`/${product._id}/edit`}>Edit</Link>
                <button className="btn btn-danger" onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
              </th>
          </tr>))
          }
        </tbody>
      </table>
    </div>
  )
}

