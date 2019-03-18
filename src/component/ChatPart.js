import React, { Component } from 'react'
import { Button, Input, Divider } from 'antd'
import '../style-css/body.css';
import TextPart from './ChatPart-component/TextPart';
import ChatMessage from './ChatPart-component/ChatMessage';
import HeaderChat from './ChatPart-component/HeaderChat';
import ChatList from './ChatList.jsx'

class ChatPart extends Component {

    render() {
        return (
            <div className="body">
                <div className="chat-list">
                    <ChatList />
                </div>
                <Divider type="vertical" />
                <div className="chat-part">
                    <HeaderChat />
                    <ChatMessage />
                    <TextPart />
                </div>
            </div>
        )
    }
}

export default ChatPart;