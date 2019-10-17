import React, {Component} from 'react'

class ListSong extends Component {
    render() {
        return (
            <div>
                {/* <img className="dataImage" src={this.props.image} width="225" height="150" alt=""/> */}
                {/* <p><strong>{this.props.name}</strong></p> */}
                <p>
                    <strong id="song" onClick={this.props.onClickSong}>{this.props.title}</strong><br/>
                    {this.props.artist}
                </p>
            </div>
        )
    }
}

export default ListSong