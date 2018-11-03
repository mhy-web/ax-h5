import React, { PureComponent } from 'react';
import Header from '../../components/header';
import {
    ConsultWrap,
    MessageWrap,
    InsetContainer,
} from './style';

class Consult extends PureComponent {
    render() {
        return (
            <ConsultWrap>
                <Header>
                    {
                        <span className="headerText">咨询</span>
                    }
                </Header>
                <MessageWrap>
                    message at here!
                </MessageWrap>
                <InsetContainer>
                    <textarea className="textarea" type="textarea" placeholder="输入消息..." />
                    <div className="buttonContent">
                        <span className="insertButton">语言</span>
                        <span className="insertButton">照片</span>
                        <span className="insertButton">拍照</span>
                        <span className="insertButton">表情</span>
                    </div>
                </InsetContainer>

            </ConsultWrap>
        )
    }
}

export default Consult;