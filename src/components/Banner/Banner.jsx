import { Button } from '@mui/material'
import React, { useState } from 'react'
import Search from '../Search/Search'
import "./Banner.css"
import { useNavigate } from "react-router-dom"
const Banner = () => {
    
    const[showSearch, setShowSearch] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='banner'>
            <div className="banner__search">
                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined' >{ showSearch? "Hide" : "Search Dates" }</Button>
                {showSearch && <Search />}
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
                <Button onClick={()=> navigate('/search')} variant='outlined'>Explore NearBy</Button>
            </div>
        </div>
    )
}

export default Banner