import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    BannerWrap
} from './style';

class Banner extends PureComponent {
    render() {
        return (
            <BannerWrap>banner</BannerWrap>
        )
    }
}
const mapState = (state) => ({
    
})

const mapDispatch = (dispatch) => ({
    
})

export default connect(mapState, mapDispatch)(Banner);