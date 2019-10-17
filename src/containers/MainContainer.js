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
            selectedSong: null
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

        // fetch("http://localhost:3001/toppings")
        //     .then(resp => resp.json())
        //     .then(data => this.setState({
        //         toppingList: data
        //     }))
    }

    handleClick = (e) => {
        // console.log("clicked target:", e.target.innerText.slice(6))
        // this.setState({ h2Value: e.target.innerText.slice(6) })
        console.log("clicked target:", e.target.innerText)
        const foundSong = this.state.songArray.find(song => song.title === e.target.innerText)
        console.log(foundSong)
        this.setState({ selectedSong: foundSong })
    }

    render() {
        console.log(this.state.genreArray)
        console.log(this.state.instrumentArray)
        console.log(this.state.songArray)
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
                    <SelectionContainer songList={this.state.songArray} onClickSelection={this.handleClick}/>
                    <DisplayContainer selectedSongDisplay={this.state.selectedSong}/>
                </div>
            </div>
        )
    }

}

export default MainContainer