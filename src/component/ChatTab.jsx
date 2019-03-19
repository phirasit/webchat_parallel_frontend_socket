import React, { Component } from 'react';
import { Card, Col, Row, Badge } from 'antd';
import tempChatTabPic from '../img/tempChatTabPic.jpg'
import '../style-css/ChatTab.css'
import * as Caller from '.././utility/callFunction';


class ChatTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // chatID: this.props.item.chatID,
            groupName: '12345',
            // chatName: this.props.item.chatName,
            clientName: '1',
            chatMsg: this.props.item.chatMsg,
            unreadNum: this.props.item.unreadNum,
            chatThumbnail: this.props.item.chatThumbnail,
            data: [],
        }
    }

    async getMessage() {
        let message = await Caller.getMessage(this.state.clientName, this.state.groupName)
        console.log("success pa wa", message, "andddd", this.state.data)
        this.setState({
            data: message
        });
    }

    handleGroupList = (e) => {
        this.getMessage()
        this.props.callback([this.state.groupName, this.state.clientName, this.state.data]);
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