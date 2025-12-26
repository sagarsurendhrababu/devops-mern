import React,{useState} from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {  
    const [title,setTitle] = useState();
    const [description,setDescription] = useState(); 
    const [poster,setPoster] = useState([]);

    useEffect(() => {
      const fetchPosters = async () => {
        try{
          const response = await axios.get('http://localhost:2800/api/posters');
          setPoster(response.data);
        }catch(err){
          console.error('Error fetching posters:', err);
        }
      };
      fetchPosters();
    }, [poster]);

    const handlePosterSubmit = async(e) => {
      e.preventDefault();
     try{
      const response = await axios.post('http://localhost:2800/api/posters', {title,description});
      setPoster([ response.data, ...poster]);     
     }catch(err){
      console.error('Error creating poster:', err);
     }
    } 

  return (
    <>
      <h1>Hello, World!</h1>
      <form onSubmit={handlePosterSubmit}>
        <input type="text" onChange={e => setTitle(e.target.value)} />
        <input type="text" onChange={e => setDescription(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {poster && poster.map((p) => (
          <li key={p._id}>{p.title}: {p.description}</li>
        ))}
      </ul>
    </>
  )
}

export default App
