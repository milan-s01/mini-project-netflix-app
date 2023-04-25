import React from 'react';
import { useState, useEffect } from 'react';
import './ListItem.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ListItem2(props) {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const url = "http://localhost:4000/movies?page=1&pageSize=10&orderBy=name";


    useEffect(() => {
        console.log(favorites)
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
            <div className='movie-list'>
                {movies.map((movie) => (
                    <div key={movie.id} className='movie'>
                        <div className='icons'>
                            <FavoriteIcon
                                className="fav-icon"
                                // onClick={() => addFavorites(movie.id)}
                            >
                            </FavoriteIcon>
                        </div>
                        <Link to={`/movie/${movie.id}`} key={movie.id} className='movie-link'>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default ListItem2;