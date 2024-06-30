import './Playlist.css'
import Tracklist from '../Tracklist/Tracklist'

function Playlist (props) {


    return (
        <div className='box'>
            <div className='Title'>
                <input placeholder= 'Enter Playlist Name!'></input>
                <button>Save Playlist!</button>
            </div>
            <div className='container-box'>
               
            </div>
        </div>
        
    )
}

export default Playlist