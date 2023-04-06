import React from 'react';
import { useState, useEffect } from 'react';
import './ListItem.scss';
import axios from 'axios';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

function ListItem2() {
    const [movies, setMovies] = useState([]);
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=03732a642aba67864e7018998055639d&language=en-US&orderBy=vote";

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
            <div className='movie-list'>
                {movies.map((movie) => (
                    <div key={movie.id} className='movie'>
                        <Link to={`/movie/${movie.id}`} key={movie.id} className='movie-link'>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="movie" />
                        </Link>
                    </div>
                ))}
            </div>
            <div className='iteminfo'>
                <div className='icons'>
                    <PlayArrowIcon></PlayArrowIcon>
                </div>
            </div>
        </div>
    )
}

export default ListItem2;