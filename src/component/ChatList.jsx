import React, { Component } from 'react';
import { Layout, Divider, Row, Col, Button } from 'antd';
import '../style-css/ChatList.css';
import ChatTab from './ChatTab';

const { Header, Footer, Content } = Layout;

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientID: '',
            chatTabList: [],
        }

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
                            <Button>Create Group</Button>
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