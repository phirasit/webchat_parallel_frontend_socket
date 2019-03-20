import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'
import './header-style.css';
var Caller = require('../../utility/callFunction');


class HeaderChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientID: '',
            clientName: '',
            groupName: '',
            clientImg: '',
            time: '',
        }
    }

    handleLeaveBtn = (e) => {
        console.log(this.state.groupName);
        Caller.leaveGroup(this.state.clientName, this.state.groupName)
    }

    handleBackBtn = (e) => {
        console.log(this.state.groupName);
        // Caller.leaveGroup(this.state.clientName, this.state.groupName)
        this.setState({
            groupName: ''
        })
        this.props.callback('');

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