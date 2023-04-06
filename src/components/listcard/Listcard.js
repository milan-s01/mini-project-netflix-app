import React from 'react';
import axios from 'axios';
import { useState , useEffect } from 'react';
import './Listcard.scss';

function Listcard() {
    const [movies, setMovies] = useState([]);
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=03732a642aba67864e7018998055639d&language=en-US&page=1";

    useEffect(() => {
        // debugger
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
            <div className='movielist'>
              {movies.map((movie) => (
                <div key={movie.id} className='mov'>
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

export default Listcard