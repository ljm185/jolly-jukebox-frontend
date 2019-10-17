import React, {Component} from 'react'

class PlaylistForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        {/* <input type="text" name="name" /> What is "name"? */}
                        <input type="text" name="name" placeholder="Create new playlist..." />
                    </label>
  <                 input type="submit" value="+" />
                </form>
            </div>
        )
    }
}

export default PlaylistForm