import { Search, Language, ExpandMore } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className='header' >
            <Link to={"/"}>
                <img className='header__icon' src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png" alt="Logo" />
            </Link>
            <div className="header__center">
                <input type="text" />
                <Search />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}

export default Header