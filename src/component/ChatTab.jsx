import React, { Component } from 'react';
import { Card, Col, Row, Badge } from 'antd';
import tempChatTabPic from '../img/tempChatTabPic.jpg'
import '../style-css/ChatTab.css'
import * as Caller from '.././utility/callFunction';


class ChatTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: '12345',
            clientName: '1',
            chatMsg: this.props.item.chatMsg,
            unreadNum: this.props.item.unreadNum,
            chatThumbnail: this.props.item.chatThumbnail,
            activeChat: 'false',
        }
    }

    handleGroupList = (e) => {
        this.setState({
            activeChat: 'true'
        })
        const data = { groupName: this.state.groupName, activeChat: 'true' }
        this.props.callback(data);
    }

    render() {
        return (
            <div className='parent' onClick={this.handleGroupList}>
                <Row justify='space-around'>
                    <Col span={2}>
                        <div className='image-cropper'>
                            <img src={tempChatTabPic} ></img>
                        </div>
                    </Col>
                    <Col span={20}>
                        <Row>{this.state.chatName}</Row>
                        <Row>{this.state.chatMsg}</Row>
                    </Col>
                    <Col span={2}>
                        <div>
                            <Badge count={this.state.unreadNum} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ChatTab;