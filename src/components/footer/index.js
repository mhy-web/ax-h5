import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    DetailFooter
} from './style';

class Footer extends PureComponent {
    setClass(path, str) {
        let clazz = 'footerBotton';
        if (path === str) {
            clazz = clazz + ' currentButton';
        }
        return clazz;
    }

    render() {
        this.setClass();
        const { current } = this.props;

        return (
            <DetailFooter>
                <div className='footerContent'>
                    <Link to='/' className={this.setClass(current, '/')}>发现</Link>
                    <Link to='/activites' className={this.setClass(current, '/activites')}>活动</Link>
                    <Link to='/personal' className={this.setClass(current, '/personal')}>我的</Link>
                </div>
            </DetailFooter>
        );
    }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Footer);
