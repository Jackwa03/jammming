
import './SearchResults.css'
import Tracklist from '../Tracklist/Tracklist'

function SearchResults (props) {

   


    return (
        <div className = 'box'>
            <div className='Title'>
                <h3>Songs</h3>
            </div>
            <div className = 'container-box'>
                <Tracklist tracks = {props.searchResult}/>
            </div>
        </div>
    )

};

export default SearchResults