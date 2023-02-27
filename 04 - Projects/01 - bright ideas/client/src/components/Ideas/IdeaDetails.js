import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import IdeaCard from './IdeaCard';

const IdeaDetails = props => {
  const [idea, setIdea] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if(id) {
      axios.get('http://localhost:8000/api/ideas/' + id)
        .then(res => {
          const response = res.data;
          const newIdea = response;
          setIdea(newIdea)
        })
    }
  }, [id])

  const likes = [];
  idea.likes?.forEach(user => {
    if (!likes.find(currentUser => currentUser._id === user._id)) {
      likes.push(user);
    }
  });
    
  return (
    <div className="row d-flex justify-content-center mt-3 mb-3" align="center">
      <IdeaCard idea={idea}/>

      <div key={idea._id} className="card mb-3" style={{maxWidth: "840px"}}>
        <div className="row g-0">
            <div className="card-body">
            <h3 className="card-title mb-3">People who liked this post:</h3>
            <table className="table">
        <thead>
          <tr>
            <th scope="col">Alias</th> 
            <th scope="col">Name</th>
            <th scope="col">Email</th> 
          </tr>
        </thead>
        <tbody>
          {likes?.map((user, idx)=>
          ( <tr key={idx}>
              <th scope="row"><Link className="" to={`/users/${user._id}`}>{user.alias}</Link></th>
              <th scope="row">{user.name}</th>
              <th scope="row">{user.email}</th>
          </tr>))
          } 
        </tbody>
      </table>
          </div>
        </div>
      </div>
    </div>
  )
};
export default IdeaDetails;
