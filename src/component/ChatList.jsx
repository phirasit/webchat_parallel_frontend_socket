import React, { Component } from 'react';
import { Layout, Divider, Row, Modal, Button } from 'antd';
import '../style-css/ChatList.css';
import ChatTab from './ChatTab';

const { Header, Footer, Content } = Layout;

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientID: '',
            chatTabList: [],
            visible: false,
        }

    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
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
                                title="Basic Modal"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
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