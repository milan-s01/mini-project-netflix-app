import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './moviedetails.scss';

function Moviedetails() {
    let { id } = useParams();
    const [movie, setMovie] = useState({});
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=03732a642aba67864e7018998055639d&language=en-US`;

    useEffect(() => {
        console.log(id)
        console.log(url)
        console.log(movie)
        debugger
        let token = sessionStorage.getItem("jwtToken");
        axios.get(url, {
            headers: {
                "Authorization": `x-auth-token ${token}`
            }
        }).then(response => {
            setMovie(response.data);
        }).catch(error => console.log(error));
    }, [id]);

    return (
        <div className='feature'>
            <div className='moviedetail'>
                {/* <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="moviedetail" /> */}
                <LazyLoadImage
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    className="moviedetail"
                />
                <div className='mtitile'><h3>{movie.title}</h3><br></br>
                    <h4>{movie.overview}</h4></div>
            </div>
        </div>
    );
}


export default Moviedetails