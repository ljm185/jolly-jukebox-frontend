import React, {Component} from 'react'
import ListSong from '../components/ListSong'
import ListGenre from '../components/ListGenre'
import ListInstrument from '../components/ListInstrument'
import ListPlaylist from '../components/ListPlaylist'
import PlaylistForm from '../components/PlaylistForm'
import EditPlaylistForm from '../components/EditPlaylistForm'

class SelectionContainer extends Component {

    render() {
        console.log(this.props.playlistFormInputProp)
        const songs = this.props.songList.map((song, id) => <ListSong onClickSong={this.props.onClickSelection} key={id} {...song}/>)
        const genres = this.props.genreList.map((genre, id) => <ListGenre onClickGenre={this.props.onClickGenre} key={id} {...genre}/>)
        const instruments = this.props.instrumentList.map((instrument, id) => <ListInstrument onClickInstrument={this.props.onClickInstrument} key={id} {...instrument}/>)
        const playlists = this.props.playlistList.map((playlist, id) => <ListPlaylist onClickPlaylist={this.props.onClickPlaylist} key={id} {...playlist}/>)
        let filteredSongs = null
        let filteredSongList = null
        let title = null
        if (this.props.selectedItemTypeProp === "genre") {
            filteredSongs = this.props.songList.filter(song => song.genre.name === this.props.selectedGenreProp.name)
            filteredSongList = filteredSongs.map((song, id) => <ListSong onClickSong={this.props.onClickSelection} key={id} {...song}/>)
            title = this.props.selectedGenreProp.name
            // console.log(filteredSongList)
            return (
                <div className="selectionContainer">
                    <h1>{title}</h1>
                    {filteredSongList}
                </div>
            )
        } else if (this.props.selectedItemTypeProp === "instrument") {
            filteredSongs = this.props.songList.filter(song => song.instrument.name === this.props.selectedInstrumentProp.name)
            filteredSongList = filteredSongs.map((song, id) => <ListSong onClickSong={this.props.onClickSelection} key={id} {...song}/>)
            title = this.props.selectedInstrumentProp.name
            // console.log(filteredSongList)
            return (
                <div className="selectionContainer">
                    <h1>{title}</h1>
                    {filteredSongList}
                </div>
            )
        } else if (this.props.selectedItemTypeProp === "playlist") {
            const filteredPlaylistSongs = this.props.playlistSongList.filter(playlistSong => playlistSong.playlist.name === this.props.selectedPlaylistProp.name)
            filteredSongs = filteredPlaylistSongs.map(playlistSong => playlistSong.song)
            filteredSongList = filteredSongs.map((song, id) => <ListSong onClickSong={this.props.onClickSelection} key={id} {...song}/>)
            title = this.props.selectedPlaylistProp.name
            // console.log(filteredSongList)
            return (
                <div className="selectionContainer">
                    <h1>{title}</h1>
                    <EditPlaylistForm handleEditSubmitProp={this.props.handleEditSubmitProp} handleEditFormChangeProp={this.props.handleEditFormChangeProp} editPlaylistFormInputProp={this.props.editPlaylistFormInputProp}/>
                    {filteredSongList}
                </div>
            )
        } else if (this.props.selectedNavItemProp === "all songs") {
            return (
                <div className="selectionContainer">
                    <h1>All Songs</h1>
                    {songs}
                </div>
            )
        } else if (this.props.selectedNavItemProp === "genres") {
            return (
                <div className="selectionContainer">
                    <h1>Genres</h1>
                    {genres}
                </div>
            )
        } else if (this.props.selectedNavItemProp === "instruments") {
            return (
                <div className="selectionContainer">
                    <h1>Instruments</h1>
                    {instruments}
                </div>
            )
        } else if (this.props.selectedNavItemProp === "playlists") {
            return (
                <div className="selectionContainer">
                    <h1>Playlists</h1>
                    <PlaylistForm handleSubmitProp={this.props.handleSubmitProp} handleFormChangeProp={this.props.handleFormChangeProp} playlistFormInputProp={this.props.playlistFormInputProp}/>
                    {playlists}
                </div>
            )
        } else {
            return (
                <div className="selectionContainer">
                    <h1>All Songs</h1>
                    {songs}
                </div>
            )
        } 
    }

}

export default SelectionContainer