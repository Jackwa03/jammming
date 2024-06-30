import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import SearchResult from '../SearchResults/SearchResults'
import React, {useState, useEffect} from 'react'

function App() {


//Example search

const [searchResult, setSearchResult] = useState([]);

const search = useEffect(() => {
  setSearchResult([{
    id: 1,
    name: 'Song 1',
    Artist: 'Artist 1',
    Album: 'Album 1'
  },
  {
    id: 4,
    name: 'Song 4',
    Artist: 'Artist 4',
    Album: 'Album 4'
  },
  {
    id: 3,
    name: 'Song 3',
    Artist: 'Artist 3',
    Album: 'Album 3'
  },
  {
    id: 2,
    name: 'Song 2',
    Artist: 'Artist 2',
    Album: 'Album 2'
  }])
}, [])

//Stuff here when

  return (
    
    <div>
       <h1>Jammming</h1>
      <div className='App'>
        <SearchBar onSearch = {search}/>
        <div className = 'container'>
          <SearchResult searchResult = {searchResult}/>
          <Playlist />
        </div>
        
      </div>
    </div>

  );
};

export default App;
