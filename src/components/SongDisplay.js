import React, {Component} from 'react'
import DisplayPlaylist from './DisplayPlaylist'

class SongDisplay extends Component {
    render() {
        if (this.props.displayedSong) { 
            const videoSrc = `https://www.youtube.com/embed/${this.props.displayedSong.url.slice(32)}?autoplay=1`
            const playlists = this.props.playlistList.map((playlist, id) => <DisplayPlaylist onClickPlaylist={this.props.onClickPlaylist} key={id} {...playlist} handleAddToPlaylistClickProp={this.props.handleAddToPlaylistClickProp}/>)
            return (
            <div>
                <p/>
                <button className="closeButton" onClick={this.props.handleCloseSongClickProp}>Close Song</button><br/>
                <p/>
                <iframe title="musicVideo" width="560" height="315" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/>
                <p>If YouTube embed doesn't work, click <a href={this.props.displayedSong.url} target="_blank" rel="noopener noreferrer">HERE</a></p>
                {/* <img className="dataImage" src={this.props.displayedSong.image} width="300" height="300" alt=""/> */}
                <h1><strong>{this.props.displayedSong.title}</strong></h1>
                <p>by {this.props.displayedSong.artist}</p>
                <p>from the album <a href={this.props.displayedSong.image} target="_blank" rel="noopener noreferrer">{this.props.displayedSong.album} ({this.props.displayedSong.year})</a></p>
                <p>Genre: {this.props.displayedSong.genre.name}</p>
                <p>Recommended Instrument: {this.props.displayedSong.instrument.name}</p>
                {/* <iframe title="musicVideo" width="560" height="315" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                {/* <p>If YouTube embed doesn't work, click <a href={this.props.displayedSong.url}>HERE</a></p> */}
                {/* <h1>Comments(?)</h1> */}
                <h1>Add this song to a playlist!</h1>
                {playlists}
                {/* <button onClick={this.props.handleCloseSongClickProp}>Close Song</button> */}
            </div>
            )
        } else {
            return (
                <div>
                    <h1>Welcome to Jolly Jukebox!!!!!</h1>
                    <h3>Just click on a song to the left of this message and have yourself a ball!</h3>
                </div>
            )
        }
    }
}

export default SongDisplay