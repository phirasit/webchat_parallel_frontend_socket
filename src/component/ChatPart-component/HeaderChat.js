import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'
import './header-style.css';
var Caller = require('../../utility/callFunction');


class HeaderChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientID: this.props.data.clientID,
            groupName: this.props.data.groupName,
            clientImg: '',
            time: '',
            activeChat: '',
            leaveGroupName: '',
        }
    }

    handleLeaveBtn = (e) => {
        console.log('headerChat',this.state.groupName);
        Caller.leaveGroup(this.props.data.clientID, this.props.data.groupName)
        const data = { leaveGroupName: this.props.data.groupName, activeChat: 'false', groupName: this.props.data.groupName }
        console.log(data);
        this.setState({
            activeChat: 'false',
            clientID: '',
            groupName: '',
        })
        this.props.callback(data);
        this.props.handleBackAndLeave();
    }

    handleBackBtn = (e) => {
        console.log('headerChatBack',this.state.groupName);
        // Caller.leaveGroup(this.state.clientID, this.state.groupName)
        const data = { groupName: this.props.data.groupName, activeChat: 'false' }
        console.log(data);
        this.setState({
            activeChat: 'false',
            clientID: '',
            groupName: '',
        })
        this.props.callback(data);
        this.props.handleBackAndLeave();
    }

    render() {
        return (
            <div className="header-chat send-button">
                <Button type="primary" style={{ marginLeft: "20px" }} onClick={this.handleBackBtn}>back</Button>
                <div>{this.props.data.groupName}</div>
                <Button type="danger" style={{ marginRight: "20px" }} onClick={this.handleLeaveBtn}>Leave Group</Button>
            </div>
        )
    }
}

export default HeaderChat