import React, {Component} from 'react'

class DisplayPlaylist extends Component {
    render() {
        return (
            <div>
                <p>
                    {/* <strong className="listPlaylist" onClick={this.props.onClickPlaylist}>{this.props.name}</strong> <button id={this.props.id} onClick={this.props.handleDeletePlaylistClickProp}>X</button> */}
                    <strong className="listPlaylist" onClick={this.props.onClickPlaylist}>{this.props.name}</strong> <button id={this.props.id} onClick={this.props.handleAddToPlaylistClickProp}>Add to This Playlist!</button>
                </p>
            </div>
        )
    }
}

export default DisplayPlaylist