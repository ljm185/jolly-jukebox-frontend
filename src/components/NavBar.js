import React, {Component} from 'react'

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <ul className="navList">
                    <li className="navListItem" id="allSongsNav" onClick={this.props.handleClickNavProp}><strong>All Songs</strong></li><strong>|</strong>
                    <li className="navListItem" id="genresNav" onClick={this.props.handleClickNavProp}><strong>Genres</strong></li><strong>|</strong>
                    <li className="navListItem" id="instrumentsNav" onClick={this.props.handleClickNavProp}><strong>Instruments</strong></li><strong>|</strong>
                    <li className="navListItem" id="playlistsNav" onClick={this.props.handleClickNavProp}><strong>Playlists</strong></li><strong>|</strong>
                    <li className="navListItem" id="recommendSongNav" onClick={this.props.handleClickNavProp}><strong>Recommend me a song!</strong></li>
                    {/* <li className="navListItem" id="profileNav" onClick={this.props.handleClickNavProp}>My Profile(?)</li> */}
                    {/* <li className="navListItem" id="logoutNav" onClick={this.props.handleClickNavProp}>Logout</li> */}
                </ul>
            </div>
        )
    }
}

export default NavBar