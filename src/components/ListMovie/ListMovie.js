import React, { useRef, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../listitem/ListItem';
import './listmovie.scss';

function ListMovie() {
    const[slideNumber,setSlideNumber] = useState(0);
    const listRef = useRef();

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right") {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <div className='list'>
            <span className='continue'>Popular on Netflix</span>
            <div className='wrapper'>
                <ArrowBackIosIcon className='arrow left' onClick={() => handleClick("left")} ></ArrowBackIosIcon>
                <div className='lmovie' ref={listRef}>
                    <ListItem></ListItem>

                </div>
                <ArrowForwardIosIcon className='arrow right' onClick={() => handleClick("right")} ></ArrowForwardIosIcon>
            </div>
        </div>
    )
}

export default ListMovie