import React, {Component} from 'react'

// The Fisher-Yates Shuffle
function shuffleSongs(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

// recommendation system is still janky
class RecommendSongForm extends Component {
    render() {
        if (this.props.recommendationExistsProp) {
            const songList = [...this.props.songList]
            const shuffledSongs = shuffleSongs(songList)
            console.log(shuffledSongs)
            let perfectSong = {}
            if (shuffledSongs.find(song => song.genre.id === parseInt(this.props.genreOptionValueProp) && song.instrument.id === parseInt(this.props.instrumentOptionValueProp))) {
                perfectSong = shuffledSongs.find(song => song.genre.id === parseInt(this.props.genreOptionValueProp) && song.instrument.id === parseInt(this.props.instrumentOptionValueProp))
            } else {
                perfectSong = shuffledSongs.find(song => song.genre.id === parseInt(this.props.genreOptionValueProp) || song.instrument.id === parseInt(this.props.instrumentOptionValueProp))
            }
            console.log(perfectSong, parseInt(this.props.genreOptionValueProp), parseInt(this.props.instrumentOptionValueProp))
            console.log(perfectSong, perfectSong.genre.id, perfectSong.instrument.id)
            return (
                <div>
                    <h1>Congratulations! Here's the perfect song for you.</h1>
                    <h2>{perfectSong.title}</h2>
                    <p>Artist: {perfectSong.artist}</p>
                    <p>Album: {perfectSong.album}</p>
                    <p>Year: {perfectSong.year}</p>
                    <p>Genre: {perfectSong.genre.name}</p>
                    <p>Recommended Instrument: {perfectSong.instrument.name}</p>
                    <button onClick={this.props.handleAnotherSongClickProp}>Recommend Me Another Song!</button>
                </div>
            )
        } else {
            const genreOptions = this.props.genreList.map((genre) => <option key={genre.id} id={genre.id} value={genre.id}>{genre.name}</option>)
            const instrumentOptions = this.props.instrumentList.map((instrument) => <option key={instrument.id} id={instrument.id} value={instrument.id}>{instrument.name}</option>)
            return (
                <div>
                    <form onSubmit={this.props.handleSubmitRecFormProp}>
                        <h1>Recommend Me a Song!</h1>
                        <p>What's your favorite genre? <select onChange={this.props.handleChangeGenreProp} defaultValue="1">
                            {/* <option selected>Select One</option> */}
                            {genreOptions}
                        </select></p>
                        <p>What's your favorite instrument? <select onChange={this.props.handleChangeInstrumentProp} defaultValue="1">
                            {/* <option selected>Select One</option> */}
                            {instrumentOptions}
                        </select></p>
                        <input type="submit" value="Recommend Me a Song!" />
                    </form>
                </div>
            )
        }
    }
}

export default RecommendSongForm