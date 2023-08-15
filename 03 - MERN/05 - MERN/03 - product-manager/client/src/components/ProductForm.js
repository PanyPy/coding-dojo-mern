import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const ProductForm = props => {
  const history = useHistory();
  const isEdit = props.id && props.isEdit;
  const isView = props.id && props.isView;

  const [title, setTitle] = useState(""); 
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // load if isEdit or isView
    if(props.id) {
      axios.get('http://localhost:8000/api/products/' + props.id)
        .then(res => {
          setTitle(res.data.title);
          setPrice(res.data.price);
          setDescription(res.data.description);
        })
    }
  }, [props.id])

  const deleteProduct = () => {
    axios.delete('http://localhost:8000/api/product/' + props.id)
      .then( () => history.push("/"))
  }

  // create
  const createProduct = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/product', 
      { title,price, description})
    .then(response=>console.log(response))
    .then(() => props.loadProducts())
    .then(() => {
      setTitle("");
      setPrice("");
      setDescription("");
    })
    .catch(error=>console.log(error))
  }

  // update
  const updateProduct = e => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/products/' + props.id, 
      {title, price, description })
      .then(response => console.log(response));
  }

  return (
    <form onSubmit={ isEdit ? updateProduct : createProduct}>
      <div className="row flex-column align-items-center mt-3 mb-3">
        <h2>{isView && "View"} {isEdit && "Edit"} {!isView && !isEdit && "Create"} - Product Manager</h2>
        <div className="col-md-3 mb-3 ">
          <div className="input-group">
            <span className="input-group-text">Title</span>
            <input disabled={isView} type="text" className="form-control" onChange = { e =>setTitle(e.target.value)} value={title}/>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="input-group">
            <span className="input-group-text">Price</span>
            <input disabled={isView} type="number" className="form-control" onChange = { e =>setPrice(e.target.value)} value={price}/>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="input-group">
            <span className="input-group-text">Description</span>
            <input disabled={isView} type="text" className="form-control" onChange = { e =>setDescription(e.target.value)} value={description}/>
          </div>
        </div>
      </div>

      {(isEdit || isView) && <Link className="btn btn-default" to={"/"}>Home</Link>}
      {isView && <Link className="btn btn-success" to={"/" + props.id + "/edit"}>Edit</Link> }
      {isView &&  <button className="btn btn-danger" type="button" onClick={()=>{deleteProduct(props.id)}}>Delete</button>}
      {!isView && <button disabled={title === "" && price === ""} className="btn btn-primary" type="submit">{ isEdit ? "Save" : "Create" }</button>}
    </form>
  )
}

export default ProductForm;