import React, {Component} from 'react'

class ListGenre extends Component {
    render() {
        return (
            <div>
                <p>
                    <strong className="listGenre" onClick={this.props.onClickGenre}>{this.props.name}</strong>
                </p>
            </div>
        )
    }
}

export default ListGenre