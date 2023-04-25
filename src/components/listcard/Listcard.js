import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Listcard.scss';
import InfiniteScroll from 'react-infinite-scroll-component';

function Listcard() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const url = "http://localhost:4000/movies";

    console.log(movies);

    const fetchMoreData = () => {
        if (loading) return;
        setLoading(true);
        setPage(page + 1);
        console.log('fetch', movies)
        let token = sessionStorage.getItem("jwtToken");
        axios.get(url, {
            headers: {
                "Authorization": `x-auth-token ${token}`
            },
            params: {
                page,
                pageSize: 10,
                orderBy: 'name'
            }
        }).then(response => {
            setLoading(false);
            setTotalPages(Math.ceil(response?.data?.totalPages));
            setMovies((prev) => {
                return [
                    ...prev,
                    ...response.data.docs
                ];
            });
        }).catch(error => console.log(error));

    };

    useEffect(() => {
        console.log('hello', movies)
        let token = sessionStorage.getItem("jwtToken");
        axios.get(url, {
            headers: {
                "Authorization": `x-auth-token ${token}`
            },
            params: {
                page,
                pageSize: 10,
                orderBy: 'name'
            }
        }).then(response => {
            setMovies(response.data.docs);
            setLoading(false);
            setTotalPages(Math.ceil(response?.data?.totalPages));
        }).catch(error => console.log(error));
    }, []);

    return (
        <div className="listitem">
            <div className="scrollbar">
                <InfiniteScroll
                    dataLength={movies?.length || 0}
                    next={fetchMoreData}
                    hasMore={page < totalPages}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className="movielist">
                        {movies.map((movie) => (
                            <div key={movie.id} className="mov">
                                <img
                                    src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
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