import React, { Component } from 'react';
import { Col, Row, Badge } from 'antd';
import tempChatTabPic from '../img/tempChatTabPic.jpg'
import '../style-css/ChatTab.css'
import * as Caller from '.././utility/callFunction';


class ChatTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatID: this.props.item.chatID,
            chatName: this.props.item.chatName,
            unreadNum: 0,
            chatThumbnail: this.props.item.chatThumbnail,
            activeChat: 'false',
            groupName: this.props.item.groupName,
        }
    }

    handleGroupList = (e) => {
        this.setState({
            activeChat: 'true'
        })
        const data = { groupName: this.state.groupName, activeChat: 'true', }
        this.props.callback(data);
    }

    async getUnreadNum() {
        console.log('unreadd ===> ', 'name:', this.props.item.clientID, 'group:', this.props.item.groupName)
        let unread = await Caller.getUnreadMessage(this.props.item.clientID, this.props.item.groupName)
        console.log('unreadd', unread, 'num===', unread.message.num_messages)
        this.setState({
            unreadNum: unread.message.num_messages
        });
    }

    async componentDidMount() {
        this.interval = setInterval(() => this.getUnreadNum(), 1500);
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
                        <Row>{this.state.groupName}</Row>
                    </Col>
                    <Col span={2}>
                        <div>
                            {
                                (this.state.activeChat === 'false' || this.state.unreadNum === 0) &&
                                <Badge count={this.state.unreadNum} />
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ChatTab;