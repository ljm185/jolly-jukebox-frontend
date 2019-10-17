import React, {Component} from 'react'
// import Post from './Post'
// import FlavorContainer from './FlavorContainer'
// import ToppingContainer from './ToppingContainer'
// import DisplayContainer from './DisplayContainer'
import SongDisplay from '../components/SongDisplay'

class DisplayContainer extends Component {

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
        // const songs = this.props.songList.map((song, id) => <SongDisplay key={id} {...song}/>)
        if (this.props.selectedSongDisplay) {
            console.log(this.props.selectedSongDisplay)
        }
        return (
            <div className="displayContainer">
                {/* <h2>Flavors</h2>
                <FlavorContainer flavorList={this.state.flavorList}/>
                <h2>Toppings</h2>
                <ToppingContainer toppingList={this.state.toppingList}/>
                <h2>Make a Scoop</h2>
                <h5>Combine one flavor and one topping to make one cool scoop for your dream cone!</h5> */}
                {/* {songs} */}
                {/* Might need id for song display */}
                <SongDisplay displayedSong={this.props.selectedSongDisplay}/>
            </div>
        )
    }

}

export default DisplayContainer