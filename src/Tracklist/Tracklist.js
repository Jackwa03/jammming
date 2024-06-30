import './Tracklist.css'
import Track from '../Track/Track'

function Tracklist (props) {
    console.log(props.tracks)
    return (
     <div className = 'Tracklist'>
        {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
          />
        );
      })}

     </div>
     
    

    )
};

export default Tracklist