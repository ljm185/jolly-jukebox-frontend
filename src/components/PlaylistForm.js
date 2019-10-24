import React, {Component} from 'react'

class PlaylistForm extends Component {
    render() {
        console.log(this.props.playlistFormInputProp)
        return (
            <div className="playlistForm">
                <form onSubmit={this.props.handleSubmitProp}>
                    <label>
                        {/* <input type="text" name="name" /> What is "name"? */}
                        <input type="text" placeholder="Create new playlist..." onChange={this.props.handleFormChangeProp} value={this.props.playlistFormInputProp}/>
                    </label>
                    <input type="submit" value="+" />
                </form>
            </div>
        )
    }
}

export default PlaylistForm