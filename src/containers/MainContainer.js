import React, {Component} from 'react'
// import Post from './Post'
// import FlavorContainer from './FlavorContainer'
// import ToppingContainer from './ToppingContainer'
import DisplayContainer from './DisplayContainer'
import SelectionContainer from './SelectionContainer'

class MainContainer extends Component {

    constructor() {
        super()
        this.state = { 
            // flavorList: [],
            // toppingList: []
            genreArray: [],
            instrumentArray: [],
            songArray: [],
            playlistArray: [],
            selectedSong: null,
            selectedGenre: null,
            selectedInstrument: null,
            selectedPlaylist: null
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

        // fetch("http://localhost:3001/toppings")
        //     .then(resp => resp.json())
        //     .then(data => this.setState({
        //         toppingList: data
        //     }))
    }

    handleClickSong = (e) => {
        // console.log("clicked target:", e.target.innerText.slice(6))
        // this.setState({ h2Value: e.target.innerText.slice(6) })
        console.log("clicked target:", e.target.innerText)
        const foundSong = this.state.songArray.find(song => song.title === e.target.innerText)
        console.log(foundSong)
        this.setState({ selectedSong: foundSong })
    }

    handleClickGenre = (e) => {
        // console.log("clicked target:", e.target.innerText.slice(6))
        // this.setState({ h2Value: e.target.innerText.slice(6) })
        if (e.target.className === "listGenre") {
            console.log("clicked target:", e.target.innerText)
            const foundGenre = this.state.genreArray.find(genre => genre.name === e.target.innerText)
            console.log(foundGenre)
            this.setState({ selectedGenre: foundGenre })
        }
    }

    handleClickInstrument = (e) => {
        // console.log("clicked target:", e.target.innerText.slice(6))
        // this.setState({ h2Value: e.target.innerText.slice(6) })
        if (e.target.className === "listInstrument") {
            console.log("clicked target:", e.target.innerText)
            const foundInstrument = this.state.instrumentArray.find(instrument => instrument.name === e.target.innerText)
            console.log(foundInstrument)
            this.setState({ selectedInstrument: foundInstrument })
        }
    }

    handleClickPlaylist = (e) => {
        // console.log("clicked target:", e.target.innerText.slice(6))
        // this.setState({ h2Value: e.target.innerText.slice(6) })
        if (e.target.className === "listPlaylist") {
            console.log("clicked target:", e.target.innerText)
            const foundPlaylist = this.state.playlistArray.find(playlist => playlist.name === e.target.innerText)
            console.log(foundPlaylist)
            this.setState({ selectedPlaylist: foundPlaylist })
        }
    }

    render() {
        console.log(this.state.genreArray)
        console.log(this.state.instrumentArray)
        console.log(this.state.songArray)
        console.log(this.state.playlistArray)
        // const posts = this.state.postList.map((post, id) => <Post key={id} {...post} onClick={this.handleClick}/>)
        return (
            <div className="mainContainer">
                {/* <h2>Flavors</h2>
                <FlavorContainer flavorList={this.state.flavorList}/>
                <h2>Toppings</h2>
                <ToppingContainer toppingList={this.state.toppingList}/>
                <h2>Make a Scoop</h2>
                <h5>Combine one flavor and one topping to make one cool scoop for your dream cone!</h5> */}
                {/* Snooping as usual, I see! */}
                All Songs Genres Instruments Playlists Logout
                <div className="belowNavBar">
                    <SelectionContainer songList={this.state.songArray} genreList={this.state.genreArray} instrumentList={this.state.instrumentArray} playlistList={this.state.playlistArray} onClickSelection={this.handleClickSong} onClickGenre={this.handleClickGenre} onClickInstrument={this.handleClickInstrument} selectedGenreProp={this.state.selectedGenre} selectedInstrumentProp={this.state.selectedInstrument}/>
                    <DisplayContainer selectedSongDisplay={this.state.selectedSong}/>
                </div>
            </div>
        )
    }

}

export default MainContainer