import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Listcard.scss';
import InfiniteScroll from "react-infinite-scroll-component";

function Listcard() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const url = "http://localhost:4000/movies?page=1&pageSize=10&orderBy=name";

    const fetchMoreData = () => {
        setPage(page + 1);
        let token = sessionStorage.getItem("jwtToken");
        axios.get(url, {
            headers: {
                Authorization: `x-auth-token ${token}`,
            },
        }).then((response) => {
            setMovies([...movies, ...response.data.docs]);
        }).catch((error) => console.log(error));
    };

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
        <div className="listitem">
            <div className="scrollbar">
                <InfiniteScroll
                    dataLength={movies.length} // set length of data
                    next={fetchMoreData} // function to call when user scrolls to bottom
                    hasMore={true} // set to false when all data is loaded
                    
                >
                    <div className="movielist">
                        {movies.map((movie) => (
                            <div key={movie.id} className="mov">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt={movie.title}
                                    className="movie"
                                />
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default Listcard