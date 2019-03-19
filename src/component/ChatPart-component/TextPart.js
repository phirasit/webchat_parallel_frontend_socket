import React, { Component } from 'react'
import { Button, Input } from 'antd'
import './text-part-style.css';
import ChatMessage from './ChatMessage';
import disImg from './img/images.png'
var Caller = require('../../utility/callFunction');


class TextPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            data: [],
            time: '',
            clientID: 'test_user01',
            clientName: '',
            clientImg: '',
            groupName: 'zxcv',
        }
    }

    onInputChange = field_name => e => {
        this.setState({ [field_name]: e.target.value })
        console.log(this.state)
    }

    handleSendMessage = (e) => {
        Caller.sendMessage(this.state.clientName, this.state.groupName, this.state.message)
        this.setState({ message: '' })
    }

    render() {
        return (
            <div className="text-part">
                <div className="text-input send-button">
                    <Input placeholder="Message" value={this.state.message}
                        onChange={this.onInputChange('message')} />
                    <Button type="primary" onClick={this.handleSendMessage}> Send </Button>
                </div>
            </div>
        )
    }
}

export default TextPart