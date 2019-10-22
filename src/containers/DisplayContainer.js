import React, {Component} from 'react'
import SongDisplay from '../components/SongDisplay'
import RecommendSongForm from '../components/RecommendSongForm'

class DisplayContainer extends Component {

    render() {
        // if (this.props.selectedSongDisplay) {
        //     console.log(this.props.selectedSongDisplay)
        // }
        if (this.props.recFormShouldBeRenderedProp) {
            return (
                <div className="displayContainer">
                    <RecommendSongForm
                        handleChangeGenreProp={this.props.handleChangeGenreProp}
                        handleChangeInstrumentProp={this.props.handleChangeInstrumentProp}
                        handleSubmitRecFormProp={this.props.handleSubmitRecFormProp}
                        recommendationExistsProp={this.props.recommendationExistsProp}
                        songList={this.props.songList}
                        genreList={this.props.genreList}
                        instrumentList={this.props.instrumentList}
                        genreOptionValueProp={this.props.genreOptionValueProp}
                        instrumentOptionValueProp={this.props.instrumentOptionValueProp}
                        handleAnotherSongClickProp={this.props.handleAnotherSongClickProp}
                    />
                </div>
            )
        } else {
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

}

export default DisplayContainer