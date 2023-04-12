import React, { useRef } from 'react';
import './featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

function Featured() {
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    };

    return (
        <div className='featured'>
            <iframe ref={videoRef} width="560" height="315" src="https://www.youtube.com/embed/onRrDgxAlPc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='info'>
                <img src="http://occ-0-2186-987.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQ4uguhAxGr-PvcN9Ndge6gj50I8HiUvgyMLY_A5YeEJWn45emsxH0XEW7hvajhcH-F4pyx1bima0V2apju-6QdqNoVNhfkMRM-cnmnn3lzTDlud-xDnzwe_9HvV331IHebsKclJSIA8YaJ0Q44Am17koQMXF52hOZFobFPYYgXBsYyrRxGE5w.webp?r=3c8"></img>
                <span className='desc'>Legendary warrior Po teams up with an elite English knight on a global quest to rescue magical weapons, restore his reputation — and save the world! Watch all you want. Jack Black and Rita Ora lend their voices to this epic animated series based on the popular film franchise.</span>
                <div className='buttons'>
                    <button className='play' onClick={handlePlay}>
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
    );
}

export default Featured