import React, { Component } from 'react'
import { Button, Input, Divider } from 'antd'
import '../style-css/body.css';
import '../style-css/message.css';

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
                <Divider type="vertical" />
                <div className="chat-part">
                    <div className="chat-part">
                        <div className="talk-bubble-right tri-right round btm-right" >
                            <div className="talktext-right">
                                <p>right test message</p>
                            </div>
                        </div>
                        <div className="talk-bubble-left tri-right round btm-left">
                            <div className="talktext-left">
                                <p>left test message</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-part">
                        <div className="text-input">
                            <Input placeholder="Text" />
                            <Button type="primary"> Send </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatPart