import React, { Component } from 'react'
import { Divider } from 'antd'
import '../style-css/body.css';
import ChatList from './ChatList.jsx'
import ChatPart from './ChatPart';

class ActivePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '',
            clientID: '1',
            clientName: '1',
            groupName: '',
            activeChat: 'false',
        }
    }

    myCallback = (data) => {
        console.log(data)
        this.setState({ groupName: data.groupName, activeChat: data.activeChat })
    }

    render() {
        const data = { clientID: this.state.clientID, clientName: this.state.clientName, groupName: this.state.groupName }
        console.log("dataaa", data)
        return (
            <div className="body">
                <div className="chat-list">
                    <ChatList callback={this.myCallback} />
                </div>
                <Divider type="vertical" />
                {
                    this.state.activeChat == 'true' &&
                    (<div className="chat-part">
                        <ChatPart data={data} callback={this.myCallback} />
                    </div>)
                }
            </div>
        )
    }
}

export default ActivePage;