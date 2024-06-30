import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import SearchResult from '../SearchResults/SearchResults'
import React, {useState, useCallback} from 'react'
import Spotify from '../util/Spotify';

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track])
    },
    [playlistTracks]
  );

  const removeTrack = useCallback(
    (track) => {
      setPlaylistTracks((prevTracks) => 
        prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      )

    }, [])

    const updatePlaylistName = useCallback((name) => {
      setPlaylistName(name);
    }, []);
  
    const search = useCallback((term) => {
      Spotify.search(term).then(setSearchResult)
    });

    const savePlaylist = useCallback(() => {
      const trackUris = playlistTracks.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, trackUris).then(() => {
        setPlaylistName("");
        setPlaylistTracks([]);
      });
    }, [playlistName, playlistTracks]);

//Stuff here when

  return (
    
    <div>
       <h1>Jammming</h1>
      <h1>{playlistName}</h1>
      <div className='App'>
        <SearchBar onSearch = {search}/>
        <div className = 'container'>
          <SearchResult searchResult = {searchResult} onAdd = {addTrack}/>
          <Playlist playlistName={playlistName}
            playlistTracks={playlistTracks} onRemove = {removeTrack} onNameChange = {updatePlaylistName} onSave ={savePlaylist} />
        </div>
        
      </div>
    </div>

  );
};

export default App;
