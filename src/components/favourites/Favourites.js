import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';

function Favourites({ favourites }) {
    const [movies, setMovies] = useState([]);
    const url = "http://localhost:4000/movies?page=1&pageSize=10&orderBy=release_date";

    useEffect(() => {
        debugger
        console.log(movies)
        let token = sessionStorage.getItem("jwtToken");
        axios.get(url, {
            headers: {
                "Authorization": `x-auth-token ${token}`
            }
        }).then(response => {
            setMovies(response.data.results);
        }).catch(error => console.log(error));
    }, []);
    return (
      <div>
        {favourites.map((movie) => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    );
  }

  export default Favourites;
  