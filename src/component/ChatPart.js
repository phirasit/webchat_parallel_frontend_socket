import React, { Component } from 'react'
import '../style-css/body.css';
import TextPart from './ChatPart-component/TextPart';
import ChatMessage from './ChatPart-component/ChatMessage';
import HeaderChat from './ChatPart-component/HeaderChat';

class ChatPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientID: '',
            groupName: '',
        }
    }

    render() {
        const data2 = { clientID: this.props.data.clientID, groupName: this.props.data.groupName }
        console.log("dataaa 2 jaaaaa", data2)
        return (
            <div>
                <HeaderChat data={data2} callback={this.props.callback} handleBackAndLeave={this.props.handleBackAndLeave} />
                <ChatMessage data={data2} />
                <TextPart data={data2} />
            </div>
        )
    }
}

export default ChatPart;