import React, {Component} from 'react'

class ListSong extends Component {
    render() {
        return (
            <div>
                <p>
                    <strong className="listSong" onClick={this.props.onClickSong}>{this.props.title}</strong> {this.props.selectedPlaylistProp ? <button id={this.props.id} onClick={this.props.handleDeleteFromPlaylistClickProp}>X</button> : null}<br/>
                    {this.props.artist}
                </p>
            </div>
        )
    }
}

export default ListSong