import './Playlist.css'
import Tracklist from '../Tracklist/Tracklist'
import React, { useCallback } from 'react';
function Playlist (props) {

    const handlePlaylistChange = useCallback((e) => {
      props.onNameChange(e.target.value)
    }, [props.onNameChange]);

  

    return (
        <div className='box'>
            <div className='Title'>
                <input placeholder= 'Enter Playlist Name!' onChange = {handlePlaylistChange} defaultValue={""}></input>
                <button onClick = {props.onSave}>Save Playlist to Spotify!</button>
            </div>
            <div className='container-box'>
                <Tracklist
                 tracks={props.playlistTracks} 
                 isRemoval = {true}
                 onRemove = {props.onRemove}/>
            </div>
        </div>
        
    )
}

export default Playlist