import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'
import './header-style.css';

class HeaderChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupID: '',
            groupName: 'Grouppppppp'
        }
    }
    render() {
        return (
            <div className="header-chat">
                <div style={{ marginRight: "25%" }}>{this.state.groupName}</div>
                <Button type="danger" style={{ marginRight: "20px" }}>Leave Group</Button>
            </div>
        )
    }
}

export default HeaderChat