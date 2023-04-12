import React from 'react';
import './watch.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

function Watch() {
    const src = "https://youtu.be/gEZbarOeI3o";
    return (
        <div className='watch'>
            {/* <div className='back'>
                <ArrowBackOutlinedIcon></ArrowBackOutlinedIcon>
                Home
            </div>
            <video controls width="80%">
                <source src="https://youtu.be/fkorWPoi6E0" type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video> */}
            <video controls width="80%">
                <source src={src} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
    )
}

export default Watch