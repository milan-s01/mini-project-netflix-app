import React from 'react';
import { useState, useEffect } from 'react';
import './ListItem.scss';
import axios from 'axios';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Link } from 'react-router-dom';

function ListItem() {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const url = "http://localhost:4000/movies?page=1&pageSize=10&orderBy=voting";

    const addFavorites = (id) => {
        console.log(id)
        let token = sessionStorage.getItem("jwtToken");
        axios.post('http://localhost:4000/movies/favourite', {
            movieId: id
        }, {
            headers: {
                "Authorization": `x-auth-token ${token}`
            }
        }).then(response => {
            setMovies(response.data.docs);
        }).catch(error => console.log(error));

    }

    useEffect(() => {
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
            <div className='movie-list'>
                {movies.map((movie) => (
                    <div key={movie.id} className='movie'>
                        <Link to={`/movie/${movie.id}`} key={movie.id} className='movie-link'>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="movie" />
                        </Link>
                        <div className='icons'>
                            <AddIcon onclick={addFavorites(movie.id)}></AddIcon> 
                            {/* <button onClick={() =>addFavorites(movie.id)}>Add to Fav</button> */}
                            <ThumbUpAltOutlinedIcon></ThumbUpAltOutlinedIcon>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ListItem;