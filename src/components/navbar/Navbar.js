import React from 'react';
import "./navbar.scss";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='cntr'>
        <img src='https://i.ibb.co/r5krrdz/logo.png' className='logo'></img>
        <div className='left'>
          <span>Home</span>
          <span>series</span>
          <span>Popular</span>
          <span>favourites</span>
        </div>
        <div className='right'>
          <SearchIcon className='icon'></SearchIcon>
          <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg' className='user'></img>
          <Link to="/" className='logout'><LogoutIcon></LogoutIcon></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar