import React, {Component} from 'react'

class ListGenre extends Component {
    render() {
        return (
            <div>
                {/* <img className="dataImage" src={this.props.image} width="225" height="150" alt=""/> */}
                {/* <p><strong>{this.props.name}</strong></p> */}
                <p>
                    <strong className="listGenre" onClick={this.props.onClickGenre}>{this.props.name}</strong><br/>
                </p>
            </div>
        )
    }
}

export default ListGenre