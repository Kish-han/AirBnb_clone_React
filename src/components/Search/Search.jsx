import React, { useState } from 'react'
import { Button } from '@mui/material'
import "./Search.css"
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { People } from '@mui/icons-material'
import { useNavigate } from "react-router-dom"


const Search = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const navigate = useNavigate()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    const handleSelect = (range) => {
        setStartDate(range.selection.startDate);
        setEndDate(range.selection.endDate);
    }


    return (
        <div className="search">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>Number of guests
                <People />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={()=> navigate('/search')} >Search AirBnb</Button>
        </div>
    )
}

export default Search