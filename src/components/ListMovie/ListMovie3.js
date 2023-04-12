import React, { useRef, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './listmovie.scss';
import ListItem2 from '../listitem/ListItem2';
import ListItem3 from '../listitem/ListItem3';

function ListMovie2() {
    const[isMoved,setisMoved]=useState(false);
    const[slideNumber,setSlideNumber] = useState(0);
    const listRef = useRef();

    const handleClick = (direction) => {
        setisMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right"  && slideNumber < 5 ) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <div className='list'>
            <span className='continue'>New Releases</span>
            <div className='wrapper'>
                <ArrowBackIosIcon className='arrow left' onClick={() => handleClick("left")} style={{display: !isMoved && "none"}} ></ArrowBackIosIcon>
                <div className='lmovie' ref={listRef}>
                   <ListItem3></ListItem3>
                </div>
                <ArrowForwardIosIcon className='arrow right' onClick={() => handleClick("right")} ></ArrowForwardIosIcon>
            </div>
            
        </div>
    )
}

export default ListMovie2