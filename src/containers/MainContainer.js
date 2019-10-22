import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import SelectionContainer from './SelectionContainer'
import DisplayContainer from './DisplayContainer'

function shuffleSongs(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

class MainContainer extends Component {

    constructor() {
        super()
        this.state = { 
            genreArray: [],
            instrumentArray: [],
            songArray: [],
            playlistArray: [],
            playlistSongArray: [],
            selectedSong: null,
            selectedGenre: null,
            selectedInstrument: null,
            selectedPlaylist: null,
            selectedItemType: null,
            selectedNavBarItem: null,
            playlistFormInput: "",
            editPlaylistFormInput: ""
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/genres")
            .then(resp => resp.json())
            .then(genreData => this.setState({
                genreArray: genreData
            }))

        fetch("http://localhost:3000/instruments")
            .then(resp => resp.json())
            .then(instrumentData => this.setState({
                instrumentArray: instrumentData
            }))

        fetch("http://localhost:3000/songs")
            .then(resp => resp.json())
            .then(songData => this.setState({
                songArray: songData
            }))

        fetch("http://localhost:3000/playlists")
            .then(resp => resp.json())
            .then(playlistData => this.setState({
                playlistArray: playlistData
            }))

        fetch("http://localhost:3000/playlist_songs")
            .then(resp => resp.json())
            .then(playlistSongData => this.setState({
                playlistSongArray: playlistSongData
            }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitting", this.state.playlistFormInput)
        fetch("http://localhost:3000/playlists", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: this.state.playlistFormInput.trim()
            })
          })
          .then(response => response.json())
          .then(newPlaylist => this.setState({
            playlistArray: [...this.state.playlistArray, newPlaylist],
            playlistFormInput: ""
        }))
        console.log(this.state.playlistFormInput)
    }

    handleFormChange = (e) => {
        this.setState({
            playlistFormInput: e.target.value
        })
    }

    handleEditSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.selectedPlaylist)
        console.log(this.state.editPlaylistFormInput)
        if (this.state.editPlaylistFormInput.trim() !== this.state.selectedPlaylist.name) {
            console.log(`Playlist #${this.state.selectedPlaylist.id} renamed`)
            fetch(`http://localhost:3000/playlists/${this.state.selectedPlaylist.id}`, {
                method: 'PATCH',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.editPlaylistFormInput.trim()
                })
            })
            .then(response => response.json())
            .then(renamedPlaylist => this.setState({
                // need to rerender playlist list
                playlistArray: this.state.playlistArray.filter(playlist => playlist.id !== this.state.selectedPlaylist.id).concat(renamedPlaylist),
                selectedPlaylist: renamedPlaylist,
                editPlaylistFormInput: ""
            }))
            // console.log(this.state.playlistArray)
        } else {
            console.log("You didn't rename anything!")
        }
    }

    handleEditFormChange = (e) => {
        this.setState({
            editPlaylistFormInput: e.target.value
        })
    }

    handleDeletePlaylistClick = (e) => {
        const foundPlaylist = this.state.playlistArray.find(playlist => playlist.id === parseInt(e.target.id))
        console.log(foundPlaylist)
        console.log(`Playlist #${foundPlaylist.id} deleted`)
        const foundPlaylistSongs = this.state.playlistSongArray.filter(playlistSong => playlistSong.playlist.id === foundPlaylist.id)
        console.log(foundPlaylistSongs)
        // checks if playlist songs exist
        if (foundPlaylistSongs.length !== 0) {
            foundPlaylistSongs.forEach(playlistSong => {
                fetch(`http://localhost:3000/playlist_songs/${playlistSong.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        song_id: playlistSong.song.id,
                        playlist_id: playlistSong.playlist.id
                    })
                })
                .then(this.setState({
                    playlistSongArray: this.state.playlistSongArray.filter(pS => pS.id !== playlistSong.id)
                }))
            })
            // delete this freaking stuff
            fetch(`http://localhost:3000/playlists/${foundPlaylist.id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: foundPlaylist.name
                })
            })
            .then(this.setState({
                playlistArray: this.state.playlistArray.filter(playlist => playlist.id !== foundPlaylist.id)
            }))
        } else {
            fetch(`http://localhost:3000/playlists/${foundPlaylist.id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: foundPlaylist.name
                })
            })
            .then(this.setState({
                playlistArray: this.state.playlistArray.filter(playlist => playlist.id !== foundPlaylist.id)
            }))
        }
    }

    handleClickSong = (e) => {
        // console.log("clicked target:", e.target.innerText)
        const foundSong = this.state.songArray.find(song => song.title === e.target.innerText)
        // console.log(foundSong)
        this.setState({
            selectedSong: foundSong
        })
    }

    handleClickGenre = (e) => {
        if (e.target.className === "listGenre") {
            // console.log("clicked target:", e.target.innerText)
            const foundGenre = this.state.genreArray.find(genre => genre.name === e.target.innerText)
            // console.log(foundGenre)
            this.setState({
                selectedGenre: foundGenre,
                selectedItemType: "genre"
            })
        }
    }

    handleClickInstrument = (e) => {
        if (e.target.className === "listInstrument") {
            // console.log("clicked target:", e.target.innerText)
            const foundInstrument = this.state.instrumentArray.find(instrument => instrument.name === e.target.innerText)
            // console.log(foundInstrument)
            this.setState({
                selectedInstrument: foundInstrument,
                selectedItemType: "instrument"
            })
        }
    }

    handleClickPlaylist = (e) => {
        if (e.target.className === "listPlaylist") {
            // console.log("clicked target:", e.target.innerText)
            const foundPlaylist = this.state.playlistArray.find(playlist => playlist.name === e.target.innerText)
            // console.log(foundPlaylist)
            this.setState({
                selectedPlaylist: foundPlaylist,
                selectedItemType: "playlist",
                playlistFormInput: ""
            })
        }
    }

    handleClickNav = (e) => {
        if (e.target.id === "allSongsNav") {
            // console.log("clicked target:", e.target.innerText)
            this.setState({
                selectedNavBarItem: "all songs",
                selectedItemType: null,
                playlistFormInput: "",
                editPlaylistFormInput: "",
                selectedPlaylist: null
            })
        } else if (e.target.id === "genresNav") {
            // console.log("clicked target:", e.target.innerText)
            this.setState({
                selectedNavBarItem: "genres",
                selectedItemType: null,
                playlistFormInput: "",
                editPlaylistFormInput: "",
                selectedPlaylist: null
            })
        } else if (e.target.id === "instrumentsNav") {
            // console.log("clicked target:", e.target.innerText)
            this.setState({
                selectedNavBarItem: "instruments",
                selectedItemType: null,
                playlistFormInput: "",
                editPlaylistFormInput: "",
                selectedPlaylist: null
            })
        } else if (e.target.id === "playlistsNav") {
            // console.log("clicked target:", e.target.innerText)
            this.setState({
                selectedNavBarItem: "playlists",
                selectedItemType: null,
                playlistFormInput: "",
                editPlaylistFormInput: "",
                // selectedPlaylist: null
            })
        }
    }

    handleCloseSongClick = (e) => {
        console.log("song closed")
        this.setState({
            selectedSong: null
        })
    }

    handleAddToPlaylistClick = (e) => {
        const foundPlaylist = this.state.playlistArray.find(playlist => playlist.id === parseInt(e.target.id))
        console.log(`song added to playlist #${foundPlaylist.id}`)
        console.log(this.state.selectedSong.id, this.state.selectedSong.title)
        if (!this.state.playlistSongArray.find(playlistSong => playlistSong.song.id === this.state.selectedSong.id && playlistSong.playlist.id === foundPlaylist.id)) {
            fetch("http://localhost:3000/playlist_songs", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    song_id: this.state.selectedSong.id,
                    playlist_id: foundPlaylist.id
                })
            })
            .then(response => response.json())
            .then(newPlaylistSong => this.setState({
                playlistSongArray: [...this.state.playlistSongArray, newPlaylistSong]
            }))
        } else {
            console.log("You already have this song on that playlist!")
        }
    }

    handleDeleteFromPlaylistClick = (e) => {
        const foundSong = this.state.songArray.find(song => song.id === parseInt(e.target.id))
        const foundPlaylistSong = this.state.playlistSongArray.find(playlistSong => playlistSong.song.id === foundSong.id && playlistSong.playlist.id === this.state.selectedPlaylist.id)
        console.log(`song deleted from playlist #${this.state.selectedPlaylist.id}: ${this.state.selectedPlaylist.name}`)
        console.log(foundSong.id, foundSong.title)
        console.log(foundPlaylistSong)
        fetch(`http://localhost:3000/playlist_songs/${foundPlaylistSong.id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              song_id: foundPlaylistSong.song.id,
              playlist_id: foundPlaylistSong.playlist.id
            })
          })
          .then(this.setState({
            playlistSongArray: this.state.playlistSongArray.filter(playlistSong => playlistSong.id !== foundPlaylistSong.id)
          }))
    }

    render() {
        // console.log(this.state.genreArray)
        // console.log(this.state.instrumentArray)
        // console.log(this.state.songArray)
        console.log(this.state.playlistArray)
        console.log(this.state.playlistArray[this.state.playlistArray.length-1])
        console.log(this.state.playlistFormInput)
        const songArray = [...this.state.songArray]
        const shuffledSongs = shuffleSongs(songArray)
        console.log(shuffledSongs)
        return (
            <div className="mainContainer">
                <NavBar handleClickNavProp={this.handleClickNav} selectedNavItemProp={this.state.selectedNavBarItem}/>
                <div className="belowNavBar">
                    <SelectionContainer
                        songList={this.state.songArray}
                        genreList={this.state.genreArray}
                        instrumentList={this.state.instrumentArray}
                        playlistList={this.state.playlistArray}
                        playlistSongList={this.state.playlistSongArray}
                        onClickSelection={this.handleClickSong}
                        onClickGenre={this.handleClickGenre}
                        onClickInstrument={this.handleClickInstrument}
                        onClickPlaylist={this.handleClickPlaylist}
                        selectedGenreProp={this.state.selectedGenre}
                        selectedInstrumentProp={this.state.selectedInstrument}
                        selectedPlaylistProp={this.state.selectedPlaylist}
                        selectedItemTypeProp={this.state.selectedItemType} 
                        selectedNavItemProp={this.state.selectedNavBarItem}
                        handleSubmitProp={this.handleSubmit}
                        handleFormChangeProp={this.handleFormChange}
                        playlistFormInputProp={this.state.playlistFormInput}
                        handleEditSubmitProp={this.handleEditSubmit}
                        handleEditFormChangeProp={this.handleEditFormChange}
                        editPlaylistFormInputProp={this.state.editPlaylistFormInput}
                        handleDeletePlaylistClickProp={this.handleDeletePlaylistClick}
                        handleDeleteFromPlaylistClickProp={this.handleDeleteFromPlaylistClick}
                    />
                    <DisplayContainer
                        selectedSongDisplay={this.state.selectedSong}
                        handleCloseSongClickProp={this.handleCloseSongClick}
                        playlistList={this.state.playlistArray}
                        onClickPlaylist={this.handleClickPlaylist}
                        handleAddToPlaylistClickProp={this.handleAddToPlaylistClick}
                        playlistSongList={this.state.playlistSongArray}
                        handleDeleteFromPlaylistClickProp={this.handleDeleteFromPlaylistClick}
                    />
                </div>
            </div>
        )
    }

}

export default MainContainer