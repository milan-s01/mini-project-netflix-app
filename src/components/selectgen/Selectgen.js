import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './selectgen.scss';
import { Link } from 'react-router-dom';

function Selectgen() {

    let { id } = useParams();
    const [movie, setMovie] = useState({});
    const [display, setDisplay] = useState([]);
    // const url = `https://api.themoviedb.org/3/movie/${id}?api_key=03732a642aba67864e7018998055639d&language=en-US`;

    const url = `http://localhost:4000/movies?page=2&pageSize=10&orderBy=release_date`;

    useEffect(() => {

        console.log(movie)
        debugger
        let token = sessionStorage.getItem("jwtToken");
        let randomQuery = Math.random().toString(36).substring(7);
        axios.get(`${url}&genre=${id}&${randomQuery}`, {
            headers: {
                "Authorization": `x-auth-token ${token}`
            }
        }).then(response => {
            setDisplay(response.data.docs);
            setMovie(response.data);
        }).catch(error => console.log(error));
    }, [id]);

    return (
        <div className='feature'>
            <div className='results'>
                <div className='listtem'>
                    <div className='movielst'>
                        {Array.isArray(display) && display.map((movie) => (
                        <div className='genm'>
                            <Link to={`/movie/${movie.id}`} key={movie.id} className='movie-link'>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className='movi'></img>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selectgen