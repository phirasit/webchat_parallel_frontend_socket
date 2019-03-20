import React, { Component } from 'react'
import { Button, Input, Divider } from 'antd'
import '../style-css/body.css';
import TextPart from './ChatPart-component/TextPart';
import ChatMessage from './ChatPart-component/ChatMessage';
import HeaderChat from './ChatPart-component/HeaderChat';

class ChatPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientID: '',
            clientName: '',
            groupName: '',
        }
    }

    render() {
        const data2 = { clientID: this.props.data.clientID, clientName: this.props.data.clientName, groupName: this.props.data.groupName }
        console.log("dataaa 2 jaaaaa", data2)
        return (
            <div>
                <HeaderChat data={data2} callback={this.props.callback} />
                <ChatMessage data={data2} />
                <TextPart />
            </div>
        )
    }
}

export default ChatPart;