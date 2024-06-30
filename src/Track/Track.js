import './Track.css'
import React, {useCallback} from 'react'
function Track (props) {


    const addTrack = useCallback(
        (event) => {
          props.onAdd(props.track);
        },
        [props.onAdd, props.track]
      );

    const removeTrack = useCallback (
        (event) => {
            props.onRemove(props.track);
        }, [props.onRemove, props.track]
    )

    const renderAction = () => {
       
        if (props.isRemoval) {
            return (
                <button className='Track-Action' onClick = {removeTrack}>
                    -
                </button>
            )
        }

        return (
            <button className='Track-Action' onClick={addTrack}>
                +
            </button>
        )
    }

    return (
        <div className = 'Track'>
           <div className='Track-info'>
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.Artist} | {props.track.Album}
                </p>
           </div>
           {renderAction()}
        </div>
    )
};

export default Track