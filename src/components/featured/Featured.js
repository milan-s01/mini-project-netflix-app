import React from 'react';
import './featured.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

function Featured(type) {
    const [genres, setGenres] = useState([]);
    const url = "http://localhost:4000/movies/genre";

    useEffect(() => { 
        console.log(genres)
        let token = sessionStorage.getItem("jwtToken");
        axios.get(url , {
            headers: {
                "Authorization" : `x-auth-token ${token}`
            }
        }).then(response => {
            setGenres(response.data);
        }).catch(error=>console.log(error));
    }, []);
    return (
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.name}>{genre.name}</option>
                        ))}
                    </select>
                </div>
            )}
            <img src='https://wallpaper.dog/large/20447047.jpg'></img>
            <div className='info'>
                <img src="http://occ-0-2186-987.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQ4uguhAxGr-PvcN9Ndge6gj50I8HiUvgyMLY_A5YeEJWn45emsxH0XEW7hvajhcH-F4pyx1bima0V2apju-6QdqNoVNhfkMRM-cnmnn3lzTDlud-xDnzwe_9HvV331IHebsKclJSIA8YaJ0Q44Am17koQMXF52hOZFobFPYYgXBsYyrRxGE5w.webp?r=3c8"></img>
                <span className='desc'>Legendary warrior Po teams up with an elite English knight on a global quest to rescue magical weapons, restore his reputation — and save the world! Watch all you want. Jack Black and Rita Ora lend their voices to this epic animated series based on the popular film franchise.</span>
                <div className='buttons'>
                    <button className='play'>
                        <PlayArrowIcon></PlayArrowIcon>
                        <span className='plm'>Play</span>
                    </button>
                    <button className='more'>
                        <InfoIcon></InfoIcon>
                        <span></span>more info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured