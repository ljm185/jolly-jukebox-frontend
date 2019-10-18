import React, {Component} from 'react'

class ListSong extends Component {
    render() {
        return (
            <div>
                <p>
                    <strong className="listSong" onClick={this.props.onClickSong}>{this.props.title}</strong><br/>
                    {this.props.artist}
                </p>
            </div>
        )
    }
}

export default ListSong