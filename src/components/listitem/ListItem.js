import React from 'react';
import { useState, useEffect } from 'react';
import './ListItem.scss';
import axios from 'axios';

function ListItem() {
    const [movies, setMovies] = useState([]);
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=03732a642aba67864e7018998055639d&language=en-US&page=1";

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
        <div className='listitem'>
            <div className='scrollbar'>
            <div className='movie-list'>
              {movies.map((movie) => (
                <div key={movie.id} className='movie'>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="movie"/>
                  {/* <h3>{movie.title}</h3>
                  // <p>{movie.overview}</p> */}
                  
                </div>
              ))}
            </div>
        </div>
        </div>
    )
}

export default ListItem;