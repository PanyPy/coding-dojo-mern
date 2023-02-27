import React, { useEffect, useState } from 'react'
import axios from 'axios';
import InputForm from './InputForm';
import IdeaCard from './IdeaCard';

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);

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

  console.log(ideas)
  const sortedIdeas = ideas.sort((a, b) => a.likes.length < b.likes.length ? 1 : -1);
  console.log(sortedIdeas)
  return (
    <>
      <InputForm loadIdeas={loadIdeas} />
      {sortedIdeas.map(idea => (<IdeaCard key={idea._id} idea={idea} reloadIdeas={loadIdeas} showLikes />))}
    </>
  )
}

export default IdeaList;