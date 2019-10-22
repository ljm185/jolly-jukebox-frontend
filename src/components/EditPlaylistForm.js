import React, {Component} from 'react'

class EditPlaylistForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleEditSubmitProp}>
                    <label>
                        {/* <input type="text" name="name" /> What is "name"? */}
                        <input type="text" placeholder="Rename playlist..." onChange={this.props.handleEditFormChangeProp} value={this.props.editPlaylistFormInputProp}/>
                    </label>
                    <input type="submit" value="Rename" />
                </form>
            </div>
        )
    }
}

export default EditPlaylistForm