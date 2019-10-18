import React, {Component} from 'react'
import SongDisplay from '../components/SongDisplay'

class DisplayContainer extends Component {

    render() {
        // if (this.props.selectedSongDisplay) {
        //     console.log(this.props.selectedSongDisplay)
        // }
        return (
            <div className="displayContainer">
                {/* {songs} */}
                {/* Might need id for song display */}
                <SongDisplay displayedSong={this.props.selectedSongDisplay}/>
            </div>
        )
    }

}

export default DisplayContainer