import './Track.css'

function Track (props) {

    const renderAction = () => {
       
        if (props.isRemoval) {
            return (
                <button className='Track-Action'>
                    -
                </button>
            )
        }

        return (
            <button className='Track-Action'>
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