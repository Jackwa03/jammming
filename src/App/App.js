import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import SearchResult from '../SearchResults/SearchResults'
import React, {useState, useEffect} from 'react'

function App() {


//Example search

const [searchResult, setSearchResult] = useState([]);


//Stuff here when
console.log(searchResult)
  return (
    
    <div>
       <h1>Jammming</h1>
      <div className='App'>
        <SearchBar />
        <div className = 'container'>
          <SearchResult searchResult = {searchResult}/>
          <Playlist />
        </div>
        
      </div>
    </div>

  );
};

export default App;
