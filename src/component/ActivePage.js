import React, { Component } from 'react'
import { Divider } from 'antd'
import '../style-css/body.css';
import TextPart from './ChatPart-component/TextPart';
import ChatMessage from './ChatPart-component/ChatMessage';
import HeaderChat from './ChatPart-component/HeaderChat';
import ChatList from './ChatList.jsx'
import ChatPart from './ChatPart';

class ActivePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '',
            clientID: this.props.clientID,
            clientName: 'monn',
            groupName: '',
        }
    }

    myCallback = (data) => {
        console.log(data)
        this.setState({ groupName: data })
    }

    render() {
        return (
            <div className="body">
                <div className="chat-list">
                    <ChatList callback={this.myCallback} clientID={this.state.clientID} />
                </div>
                <Divider type="vertical" />
                <div className="chat-part">
                    <ChatPart />
                </div>
            </div>
        )
    }
}

export default ActivePage;