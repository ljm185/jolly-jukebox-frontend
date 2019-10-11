import React, {Component} from 'react'
// import Post from './Post'
// import FlavorContainer from './FlavorContainer'
// import ToppingContainer from './ToppingContainer'

class MainContainer extends Component {

    constructor() {
        super()
        this.state = { 
            // flavorList: [],
            // toppingList: []
            songArray: []
        }
    }

    componentDidMount() {
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

    // handleClick = (e) => {
    //     console.log("clicked target:", e.target.innerText.slice(6))
    //     this.setState({ h2Value: e.target.innerText.slice(6) })
    // }

    render() {
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
            </div>
        )
    }

}

export default MainContainer