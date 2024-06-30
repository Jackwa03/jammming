import React, { useState, useCallback } from 'react';

import './SearchBar.css';


function SearchBar (props) {

    const [term, setTerm] = useState('');

    const handleTermChange = (e) => {
        setTerm(e.target.value)
    }

    const search = useCallback(() => {
        props.onSearch(term);
      }, [props.onSearch, term]);


    return (
        <div className= 'SearchBar'>
            <input placeholder='Enter Song Title!' onChange={handleTermChange}/>
            <button className='SearchButton' onClick={search}>
            SEARCH!
            </button>
        </div>
    )

};

export default SearchBar