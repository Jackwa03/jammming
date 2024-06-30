import './Tracklist.css'
import Track from '../Track/Track'

function Tracklist (props) {
    return (
     <div className = 'Tracklist'>
        
        <Track isRemoval = {props.isRemoval} />
        <Track isRemoval = {props.isRemoval} />
     </div>
     
    

    )
};

export default Tracklist