import React, {Component} from 'react'

class SongDisplay extends Component {
    render() {
        if (this.props.displayedSong) { 
            const videoSrc = `https://www.youtube.com/embed/${this.props.displayedSong.url.slice(32)}?autoplay=1`
            return (
            <div>
                <img className="dataImage" src={this.props.displayedSong.image} width="300" height="300" alt=""/>
                <p><strong>{this.props.displayedSong.title}</strong></p>
                <p>by {this.props.displayedSong.artist}</p>
                <p>from the album {this.props.displayedSong.album} ({this.props.displayedSong.year})</p>
                <p>Genre: {this.props.displayedSong.genre.name}</p>
                <p>Recommended Instrument: {this.props.displayedSong.instrument.name}</p>
                <iframe title="musicVideo" width="560" height="315" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>If YouTube embed doesn't work, click <a href={this.props.displayedSong.url}>HERE</a></p>
                <h1>Comments(?)</h1>
            </div>
            )
        } else {
            return (
                <div>
                    <p>Welcome to Jolly Jukebox!!!!!</p>

                    <p>Click on a song to the left and have a ball!</p>
                </div>
            )
        }
    }
}

export default SongDisplay