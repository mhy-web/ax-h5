import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import { getPersonalData } from '../../store/actionCreators';
import {
    PersionalWrap,
    TopContent,
    MainContent
} from './style';

class Personal extends PureComponent {
    componentDidMount() {
        this.props.fetchPersonDeatil();
    }

    render() {
        const { personal_info } = this.props;
        const info = (personal_info && personal_info.size > 0) ? personal_info.toJS() : {};

        return (
            <PersionalWrap>
                <TopContent>
                    <div className='top_wrap'>
                        <h3 className='total_integral'>总积分</h3>
                        <span className='integral'>{info.points}</span>
                        <span className='integral_level'>等级: {info.level}</span>
                        <Link to='/points/exchange' className='exchange_button'>积分兑换</Link>
                    </div>
                </TopContent>
                <MainContent>
                    <div className='item'>
                        <Link to='/points/explain'>积分说明</Link>
                    </div>
                    <div className='item'>
                        <Link to='/applies'>我的报名</Link>
                    </div>
                    <div className='item'>
                        <Link to='/profile'>个人信息</Link>
                    </div>
                    <div className='item'>
                        <Link to='/invite'>邀请好友</Link>
                    </div>
                    <div className='item'>
                        <span>在线客服</span>
                    </div>
                    <div className='item'>
                        <span>客服热线</span>
                    </div>
                </MainContent>
                <Footer current={this.props.match.path}></Footer>
            </PersionalWrap>
        );
    }
}
const mapState = (state) => ({
    personal_info: state.get('personal_info')
});

const mapDispatch = (dispatch) => ({
    fetchPersonDeatil() {
        const action = getPersonalData();
        dispatch(action);
    },
    exchange() {
        console.log('exchange integral!!!!!');
    }
});

export default connect(mapState, mapDispatch)(Personal);
