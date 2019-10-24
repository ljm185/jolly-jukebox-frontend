import React, {Component} from 'react'

class ListInstrument extends Component {
    render() {
        return (
            <div className="listItem">
                <p>
                    <strong className="listInstrument" onClick={this.props.onClickInstrument}>{this.props.name}</strong>
                </p>
            </div>
        )
    }
}

export default ListInstrument