import React,{ useEffect, useState }  from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


function FavoritesList() {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=03732a642aba67864e7018998055639d&language=en-US&orderBy=name";

    const addToFavorites = (movie) => {
        setFavorites([...favorites, movie]);
      };
      

    useEffect(() => {
        console.log(favorites)
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
        <div className='favorites-list'>
            {favorites.map((movie) => (
                <div key={movie.id} className='movie'>
                    <Link to={`/movie/${movie.id}`} key={movie.id} className='movie-link'>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="movie" />
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default FavoritesList