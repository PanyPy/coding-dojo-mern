import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteAuthorButton from './DeleteAuthorButton';

export default () => {

  const [ authors, setAuthors ] = useState([]);

  // skip deleted products
  const removeFromDom = authorId => {
    setAuthors(authors.filter(author => author._id !== authorId));
  }
  // if we create a new Product, we just reload products (in case there are side effects in DB)
  // fetch products
  const loadAuthors = () => {
    axios.get('http://localhost:8000/api/authors')
      .then(response=>{
        setAuthors(response.data);
    });
  };

  useEffect(()=>{
    loadAuthors();
  },[])
  return (
    <div >
      <h2>Favorite Authors</h2>
      <Link className="btn btn-primary mb-5" to="/new">Add an Author</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"># (for demo)</th> 
            <th scope="col">Author</th>
            <th scope="col">Actions available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, idx)=>
          ( <tr key={idx}>
              <th scope="row">{author._id}</th>
              <th scope="row">{author.name}</th>
              <th scope="row">
                <Link className="btn btn-success" to={`/${author._id}/edit`}>Edit</Link>
                <DeleteAuthorButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
              </th>
          </tr>))
          }
        </tbody>
      </table>
    </div>
  )
}

