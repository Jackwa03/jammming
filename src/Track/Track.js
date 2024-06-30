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
                <h3>Title</h3>
                <p>
                    Artist | Album
                </p>
           </div>
           {renderAction()}
        </div>
    )
};

export default Track