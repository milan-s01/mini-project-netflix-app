import React from 'react';
import axios from 'axios';
import { useState , useEffect } from 'react';
import './Listcard.scss';

function Listcard() {
    const [movies, setMovies] = useState([]);
    const url = "http://localhost:4000/movies?page=1&pageSize=10&orderBy=name";

    useEffect(() => {
        // debugger
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