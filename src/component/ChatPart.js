import React, { Component } from 'react'
import { Button, Input, Divider } from 'antd'
import '../style-css/body.css';
import TextPart from './ChatPart-component/TextPart';
import ChatMessage from './ChatPart-component/ChatMessage';
import HeaderChat from './ChatPart-component/HeaderChat';

class ChatPart extends Component {

    render() {
        return (
            <div>
                <HeaderChat />
                <ChatMessage />
                <TextPart />
            </div>
        )
    }
}

export default ChatPart;