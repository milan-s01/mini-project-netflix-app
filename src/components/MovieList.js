import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import "./movie.scss";

 const MovieList = () => {
 const [movies,setMovies] = useState([]);
 useEffect(()=>{
      axios.get("http://localhost:4000/movies/76600").then(response => setMovies(response.data)).catch(error => console.log(error));
 }, []);
  return (
    <>{movies.map((movie,index)=>
    <div key={index}>
        <img src={movie.poster_path} alt='movie' className='img'></img>
    </div>
    )}</>
  )
}

export default MovieList;