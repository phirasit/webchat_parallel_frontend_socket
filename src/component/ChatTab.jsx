import React, { Component } from 'react';
import { Card, Col, Row, Badge } from 'antd';
import tempChatTabPic from '../img/tempChatTabPic.jpg'
import '../style-css/ChatTab.css'

class ChatTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatID: this.props.item.chatID,
            chatName: this.props.item.chatName,
            unreadNum: this.props.item.unreadNum,
            chatThumbnail: this.props.item.chatThumbnail
        }
    }

    handleGroupList = (e) => {
        this.props.callback([this.state.chatID, this.state.chatName]);
        console.log(this.state.chatName)
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