import React, { useEffect, useState } from 'react'
import axios from 'axios';
import InputForm from './InputForm';
import IdeaCard from './IdeaCard';

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const loadIdeas = () => {
    axios.get('http://localhost:8000/api/ideas', {
      withCredentials: true,
      credentials: 'include',
    })
      .then(response=>{
        setIdeas(response.data);
    });
  };

  useEffect(()=>{
    loadIdeas();
  },[])

  let sortedIdeas;
  if (currentUser?.role !== 'Admin') {
    sortedIdeas = ideas.sort((a, b) => {
      if (a.postedBy === currentUser._id) return 1;
      if (a.likes.length === b.likes.length) return (a.postedBy.alias < b.postedBy.alias) ? -1 : 1;
      return (a.likes.length < b.likes.length) ? 1 : -1;
    });
  } else {
    sortedIdeas = ideas.sort((a, b) => (a.likes.length < b.likes.length) ? 1 : -1).sort((a, b) => a.approvedAt ? 1 : -1);
  }

  return (
    <>
      <InputForm loadIdeas={loadIdeas} />
      {sortedIdeas.map(idea => (<IdeaCard key={idea._id} idea={idea} reloadIdeas={loadIdeas} showLikes />))}
    </>
  )
}

export default IdeaList;