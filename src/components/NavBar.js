import React, {Component} from 'react'

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <ul>
                    <li className="navListItem" id="allSongsNav" onClick={this.props.handleClickNavProp}>All Songs</li>
                    <li className="navListItem" id="genresNav" onClick={this.props.handleClickNavProp}>Genres</li>
                    <li className="navListItem" id="instrumentsNav" onClick={this.props.handleClickNavProp}>Instruments</li>
                    <li className="navListItem" id="playlistsNav" onClick={this.props.handleClickNavProp}>Playlists</li>
                    <li className="navListItem" id="recommendSongNav" onClick={this.props.handleClickNavProp}>Recommend Me a Song!</li>
                    <li className="navListItem" id="profileNav" onClick={this.props.handleClickNavProp}>My Profile</li>
                    <li className="navListItem" id="logoutNav" onClick={this.props.handleClickNavProp}>Logout</li>
                </ul>
            </div>
        )
    }
}

export default NavBar