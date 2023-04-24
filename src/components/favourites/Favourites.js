import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './favourite.scss';
import Pagination from '@mui/material/Pagination';

function Favourites() {
  const [movies, setMovies] = useState([]);
  const url = "http://localhost:4000/movies/favourite?page=1&pageSize=2";

  useEffect(() => {
    debugger
    console.log(movies)
    let token = sessionStorage.getItem("jwtToken");
    axios.get(url, {
      headers: {
        "Authorization": `x-auth-token ${token}`
      }
    }).then(response => {
      setMovies(response.data.docs);
    }).catch(error => console.log(error));
  }, []);
  return (
    <div className='favlis'>
      <div className='favlist'>
        {movies.map((movie) => (
          <div key={movie.id} className='favmovie'>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="movie" />
          </div>
        ))}
      </div>
      <div className='page'>
        <Pagination count={10} className='pagination' />
      </div>
    </div>
  );
}

export default Favourites;
