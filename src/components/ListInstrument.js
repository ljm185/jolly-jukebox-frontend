import React, {Component} from 'react'

class ListInstrument extends Component {
    render() {
        return (
            <div>
                {/* <img className="dataImage" src={this.props.image} width="225" height="150" alt=""/> */}
                {/* <p><strong>{this.props.name}</strong></p> */}
                <p>
                    <strong className="listInstrument" onClick={this.props.onClickInstrument}>{this.props.name}</strong><br/>
                </p>
            </div>
        )
    }
}

export default ListInstrument