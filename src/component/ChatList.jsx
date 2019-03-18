import React, { Component } from 'react';
import { Layout, Divider, Row, Modal, Button, Input } from 'antd';
import '../style-css/ChatList.css';
import ChatTab from './ChatTab';
var Caller = require('../utility/callFunction');

const { Header, Footer, Content } = Layout;

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientID: '1234',
            chatTabList: [],
            visible: false,
            groupName: ''
        }

    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(this.state.groupName);
        Caller.createNewGroup(this.state.clientID, this.state.groupName);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    onInputChange = field_name => e => {
        this.setState({ [field_name]: e.target.value })
        console.log(this.state)
    }

    render() {
        return (
            <Layout>
                <Header className='header'>Chat</Header>
                <Content>
                    <ChatTab />
                    <ChatTab />
                    <ChatTab />
                    <ChatTab />
                    <ChatTab />
                    <Divider />
                    <div>
                        <Row>
                            <Button onClick={this.showModal}>Create Group</Button>
                            <Modal
                                title="Please enter the group name"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <Input placeholder="Group name" value={this.state.groupName}
                                    onChange={this.onInputChange('groupName')} />
                            </Modal>
                            <Button>Join Group</Button>
                            <Button type='danger'>Logout</Button>
                        </Row>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default ChatList;