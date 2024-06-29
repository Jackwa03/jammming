import React, { useState } from 'react';

import './SearchBar.css';


function SearchBar () {

    const [term, setTerm] = useState('hi');

    const handleTermChange = (e) => {
        setTerm(e.target.value)
    }

    return (
        <div className= 'SearchBar'>
            <input placeholder='Enter Song Title!' onChange={handleTermChange}/>
            <button className='SearchButton'>
            SEARCH!
            </button>
        </div>
    )

};

export default SearchBar