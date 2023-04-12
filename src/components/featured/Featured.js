import React, { useState } from 'react';
import './featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

function Featured() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoUrl = "https://www.youtube.com/embed/onRrDgxAlPc";

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div className='featured'>
            {isPlaying && (
                <iframe
                    src={videoUrl}
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    className="uvideo"
                    title='video'
                />
            )}
            {!isPlaying && (
                <img src='https://wallpaper.dog/large/20447047.jpg'></img>
            )}

            <div className='info'>
                { !isPlaying && (
                <span className='desc'>
                    Legendary warrior Po teams up with an elite English knight on a global quest to rescue magical weapons, restore his reputation — and save the world! Watch all you want. Jack Black and Rita Ora lend their voices to this epic animated series based on the popular film franchise.
                </span>)}
                <div className='buttons'>
                    {!isPlaying && (
                        <button className='play' onClick={handlePlay}>
                            <PlayArrowIcon />
                            <span className='plm'>Play</span>
                        </button>
                    )}
                    {/* { !isPlaying && (
                    <button className='more'>
                        <InfoIcon />
                        <span>more info</span>
                    </button>)} */}
                </div>
            </div>
        </div>
    );
}


export default Featured