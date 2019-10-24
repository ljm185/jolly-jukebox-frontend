import React, {Component} from 'react'

class ListGenre extends Component {
    render() {
        return (
            <div className="listItem">
                <p>
                    <strong className="listGenre" onClick={this.props.onClickGenre}>{this.props.name}</strong>
                </p>
            </div>
        )
    }
}

export default ListGenre