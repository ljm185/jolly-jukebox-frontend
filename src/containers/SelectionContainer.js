import React, {Component} from 'react'
// import Post from './Post'
// import FlavorContainer from './FlavorContainer'
// import ToppingContainer from './ToppingContainer'
// import DisplayContainer from './DisplayContainer'
import ListSong from '../components/ListSong'
import ListGenre from '../components/ListGenre'
import ListInstrument from '../components/ListInstrument'
import ListPlaylist from '../components/ListPlaylist'
import PlaylistForm from '../components/PlaylistForm'

class SelectionContainer extends Component {

    // constructor() {
    //     super()
    //     this.state = { 
    //         // flavorList: [],
    //         // toppingList: []
    //         genreArray: [],
    //         instrumentArray: [],
    //         songArray: []
    //     }
    // }

    // componentDidMount() {
    //     fetch("http://localhost:3000/genres")
    //         .then(resp => resp.json())
    //         .then(genreData => this.setState({
    //             genreArray: genreData
    //         }))

    //     fetch("http://localhost:3000/instruments")
    //         .then(resp => resp.json())
    //         .then(instrumentData => this.setState({
    //             instrumentArray: instrumentData
    //         }))

    //     fetch("http://localhost:3000/songs")
    //         .then(resp => resp.json())
    //         .then(songData => this.setState({
    //             songArray: songData
    //         }))

    //     // fetch("http://localhost:3001/toppings")
    //     //     .then(resp => resp.json())
    //     //     .then(data => this.setState({
    //     //         toppingList: data
    //     //     }))
    // }

    // handleClick = (e) => {
    //     console.log("clicked target:", e.target.innerText.slice(6))
    //     this.setState({ h2Value: e.target.innerText.slice(6) })
    // }

    render() {
        // const posts = this.state.postList.map((post, id) => <Post key={id} {...post} onClick={this.handleClick}/>)
        const songs = this.props.songList.map((song, id) => <ListSong onClickSong={this.props.onClickSelection} key={id} {...song}/>)
        const genres = this.props.genreList.map((genre, id) => <ListGenre onClickGenre={this.props.onClickGenre} key={id} {...genre}/>)
        const instruments = this.props.instrumentList.map((instrument, id) => <ListInstrument onClickInstrument={this.props.onClickInstrument} key={id} {...instrument}/>)
        const playlists = this.props.playlistList.map((playlist, id) => <ListPlaylist onClickPlaylist={this.props.onClickPlaylist} key={id} {...playlist}/>)
        let filteredSongs = null
        let filteredSongList = null
        let title = null
        // let selectedItem = null
        if (this.props.selectedItemProp === "genre") {
            filteredSongs = this.props.songList.filter(song => song.genre.name === this.props.selectedGenreProp.name)
            filteredSongList = filteredSongs.map((song, id) => <ListSong onClickSong={this.props.onClickSelection} key={id} {...song}/>)
            const fSList = filteredSongList
            title = this.props.selectedGenreProp.name
            console.log(filteredSongList)
            // this.props.selectedItemProp = null
            // return (
            //     <div className="selectionContainer">
            //         <h1>{title} (Filtered Song List)</h1>
            //         {fSList}
            //     </div>
            // )
        } else if (this.props.selectedItemProp === "instrument") {
            filteredSongs = this.props.songList.filter(song => song.instrument.name === this.props.selectedInstrumentProp.name)
            filteredSongList = filteredSongs.map((song, id) => <ListSong onClickSong={this.props.onClickSelection} key={id} {...song}/>)
            const fSList = filteredSongList
            title = this.props.selectedInstrumentProp.name
            console.log(filteredSongList)
            // this.props.selectedItemProp = null
            // return (
            //     <div className="selectionContainer">
            //         <h1>{title} (Filtered Song List)</h1>
            //         {fSList}
            //     </div>
            // )
        } else if (this.props.selectedItemProp === "playlist") {
            const filteredPlaylistSongs = this.props.playlistSongList.filter(playlistSong => playlistSong.playlist.name === this.props.selectedPlaylistProp.name)
            filteredSongs = filteredPlaylistSongs.map(playlistSong => playlistSong.song)
            filteredSongList = filteredSongs.map((song, id) => <ListSong onClickSong={this.props.onClickSelection} key={id} {...song}/>)
            const fSList = filteredSongList
            title = this.props.selectedPlaylistProp.name
            console.log(filteredSongs)
            // this.props.selectedItemProp = null
            // return (
            //     <div className="selectionContainer">
            //         <h1>{title} (Filtered Song List)</h1>
            //         {fSList}
            //     </div>
            // )
        }
        // } else if (this.props.selectedNavItemProp === "all songs") {
        //     return (
        //         <div className="selectionContainer">
        //             {/* <h2>Flavors</h2>
        //             <FlavorContainer flavorList={this.state.flavorList}/>
        //             <h2>Toppings</h2>
        //             <ToppingContainer toppingList={this.state.toppingList}/>
        //             <h2>Make a Scoop</h2>
        //             <h5>Combine one flavor and one topping to make one cool scoop for your dream cone!</h5> */}
        //             <h1>All Songs</h1>
        //             {songs}
        //         </div>
        //     )
        // } else if (this.props.selectedNavItemProp === "genres") {
        //     return (
        //         <div className="selectionContainer">
        //             {/* <h2>Flavors</h2>
        //             <FlavorContainer flavorList={this.state.flavorList}/>
        //             <h2>Toppings</h2>
        //             <ToppingContainer toppingList={this.state.toppingList}/>
        //             <h2>Make a Scoop</h2>
        //             <h5>Combine one flavor and one topping to make one cool scoop for your dream cone!</h5> */}
        //             <h1>Genres</h1>
        //             {genres}
        //         </div>
        //     )
        // } else if (this.props.selectedNavItemProp === "instruments") {
        //     return (
        //         <div className="selectionContainer">
        //             {/* <h2>Flavors</h2>
        //             <FlavorContainer flavorList={this.state.flavorList}/>
        //             <h2>Toppings</h2>
        //             <ToppingContainer toppingList={this.state.toppingList}/>
        //             <h2>Make a Scoop</h2>
        //             <h5>Combine one flavor and one topping to make one cool scoop for your dream cone!</h5> */}
        //             <h1>Instruments</h1>
        //             {instruments}
        //         </div>
        //     )
        // } else if (this.props.selectedNavItemProp === "playlists") {
        //     return (
        //         <div className="selectionContainer">
        //             {/* <h2>Flavors</h2>
        //             <FlavorContainer flavorList={this.state.flavorList}/>
        //             <h2>Toppings</h2>
        //             <ToppingContainer toppingList={this.state.toppingList}/>
        //             <h2>Make a Scoop</h2>
        //             <h5>Combine one flavor and one topping to make one cool scoop for your dream cone!</h5> */}
        //             <h1>Playlists</h1>
        //             <PlaylistForm />
        //             {playlists}
        //         </div>
        //     )
        // } else if (title) { // faulty
        //     console.log(filteredSongList)
        //     return (
        //         <div className="selectionContainer">
        //             <h1>{title} (Filtered Song List)</h1>
        //             {filteredSongList}
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div className="selectionContainer">
        //             {/* <h2>Flavors</h2>
        //             <FlavorContainer flavorList={this.state.flavorList}/>
        //             <h2>Toppings</h2>
        //             <ToppingContainer toppingList={this.state.toppingList}/>
        //             <h2>Make a Scoop</h2>
        //             <h5>Combine one flavor and one topping to make one cool scoop for your dream cone!</h5> */}
        //             <h1>All Songs</h1>
        //             {songs}
        //         </div>
        //     )
        // } 
        return (
            <div className="selectionContainer">
                {/* <h2>Flavors</h2>
                <FlavorContainer flavorList={this.state.flavorList}/>
                <h2>Toppings</h2>
                <ToppingContainer toppingList={this.state.toppingList}/>
                <h2>Make a Scoop</h2>
                <h5>Combine one flavor and one topping to make one cool scoop for your dream cone!</h5> */}
                <h1>All Songs</h1>
                {songs}
                <h1>Genres</h1>
                {genres}
                <h1>Instruments</h1>
                {instruments}
                <h1>Playlists</h1>
                <PlaylistForm />
                {playlists}
                <h1>{title} (Filtered Song List)</h1>
                {filteredSongList}
            </div>
        )
    }

}

export default SelectionContainer