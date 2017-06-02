/**
 * Created by ivan on 02.06.17.
 */
import React, { PropTypes, Component } from 'react';


class User extends Component {
    render() {
        const { name } = this.props;
        return (
            <div>
                name: { name }
            </div>
        )
    }
}

User.propTypes = {
  name: PropTypes.string.isRequired
};



export default User;