import React, {Component} from 'react'

class ListPlaylist extends Component {
    render() {
        return (
            <div>
                <p>
                    <strong className="listPlaylist" onClick={this.props.onClickPlaylist}>{this.props.name}</strong> <button id={this.props.id} onClick={this.props.handleDeletePlaylistClickProp}>X</button>
                </p>
            </div>
        )
    }
}

export default ListPlaylist