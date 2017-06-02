/**
 * Created by ivan on 02.06.17.
 */
import React, { PropTypes, Component } from 'react';


class Page extends Component {
    render() {
        const { year, photos } = this.props;
        return (
            <div>
                length: { photos.length }
                year: { year }
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
};


export default Page;