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
                <SongDisplay
                    displayedSong={this.props.selectedSongDisplay}
                    handleCloseSongClickProp={this.props.handleCloseSongClickProp}
                    playlistList={this.props.playlistList} 
                    onClickPlaylist={this.props.onClickPlaylist}
                    handleAddToPlaylistClickProp={this.props.handleAddToPlaylistClickProp}
                />
            </div>
        )
    }

}

export default DisplayContainer