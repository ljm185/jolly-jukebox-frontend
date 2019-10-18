import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import SelectionContainer from './SelectionContainer'
import DisplayContainer from './DisplayContainer'

class MainContainer extends Component {

    constructor() {
        super()
        this.state = { 
            genreArray: [],
            instrumentArray: [],
            songArray: [],
            playlistArray: [],
            selectedSong: null,
            selectedGenre: null,
            selectedInstrument: null,
            selectedPlaylist: null,
            selectedItemType: null,
            selectedNavBarItem: null
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
                selectedItemType: "playlist"
            })
        }
    }

    handleClickNav = (e) => {
        if (e.target.id === "allSongsNav") {
            // console.log("clicked target:", e.target.innerText)
            this.setState({
                selectedNavBarItem: "all songs",
                selectedItemType: null
            })
        } else if (e.target.id === "genresNav") {
            // console.log("clicked target:", e.target.innerText)
            this.setState({
                selectedNavBarItem: "genres",
                selectedItemType: null
            })
        } else if (e.target.id === "instrumentsNav") {
            // console.log("clicked target:", e.target.innerText)
            this.setState({
                selectedNavBarItem: "instruments",
                selectedItemType: null
            })
        } else if (e.target.id === "playlistsNav") {
            // console.log("clicked target:", e.target.innerText)
            this.setState({
                selectedNavBarItem: "playlists",
                selectedItemType: null
            })
        }
    }

    render() {
        // console.log(this.state.genreArray)
        // console.log(this.state.instrumentArray)
        // console.log(this.state.songArray)
        // console.log(this.state.playlistArray)
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
                    />
                    <DisplayContainer selectedSongDisplay={this.state.selectedSong}/>
                </div>
            </div>
        )
    }

}

export default MainContainer