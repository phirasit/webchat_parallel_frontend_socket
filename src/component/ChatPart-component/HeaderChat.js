import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'
import './header-style.css';
var Caller = require('../../utility/callFunction');


class HeaderChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientID: '',
            groupName: '',
            clientImg: '',
            time: '',
            activeChat: '',
            leaveGroupName: '',
        }
    }

    handleLeaveBtn = (e) => {
        console.log(this.state.groupName);
        Caller.leaveGroup(this.state.clientID, this.props.data.groupName)
        this.setState({
            activeChat: 'false'
        })
        const data = { leaveGroupName: this.props.groupName, activeChat: 'false' }
        this.props.callback(data);
        this.props.handleBackAndLeave();
    }

    handleBackBtn = (e) => {
        console.log(this.state.groupName);
        // Caller.leaveGroup(this.state.clientID, this.state.groupName)
        this.setState({
            groupName: '',
            activeChat: 'false'
        })
        const data = { groupName: this.state.groupName, activeChat: 'false' }
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