import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Home extends PureComponent {
    render() {
        return (
            <div>home</div>
        )
    }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => {
    return {

    }
}

export default connect(mapState, mapDispatch)(Home);