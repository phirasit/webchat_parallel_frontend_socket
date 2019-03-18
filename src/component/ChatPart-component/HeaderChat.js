import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'
import './header-style.css';
// var Caller = require('../utility/callFunction');


class HeaderChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupID: '',
            groupName: 'Grouppppppp',
            time: '',
            clientID: '',
            clientName: '',
            clientImg: '',
        }
    }

    handleLeaveBtn = (e) => {
        console.log(this.state.groupName);
        // Caller.leaveGroup(this.state.clientName, this.state.groupName)
    }

    render() {
        return (
            <div className="header-chat">
                <div style={{ marginRight: "25%" }}>{this.state.groupName}</div>
                <Button type="danger" style={{ marginRight: "20px" }} onClick={this.handleLeaveBtn}>Leave Group</Button>
            </div>
        )
    }
}

export default HeaderChat