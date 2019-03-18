import React, { Component } from 'react'
import { Button, Input } from 'antd'
import '../style-css/body.css';
import TextPart from './ChatPart-component/text-part';
import ChatMessage from './ChatPart-component/chat-message';
import HeaderChat from './ChatPart-component/header-chat';

class ChatPart extends Component {
    state = {
        text: ''
    }

    onInputChange(event) {
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <div className="body">
                <div className="chat-list">this is left ja.</div>
                <div className="chat-part">
                    <HeaderChat />
                    <ChatMessage isLeft="true" texts="left message" />
                    <TextPart />
                </div>
            </div>
        )
    }
}

export default ChatPart