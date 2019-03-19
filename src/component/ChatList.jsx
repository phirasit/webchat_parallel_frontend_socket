import React, { Component } from 'react';
import { Layout, Modal, Row, Input, Button } from 'antd';
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import '../style-css/ChatList.css';
import ChatTab from './ChatTab';
import * as Caller from '../utility/callFunction'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
const { Header, Footer, Content } = Layout;

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientID: '1234',
            chatTabList: [],
            visible1: false,
            visible2: false,
            groupName: '',
            joinGroupName: '',
            clientID: '',
            chatTabList: [{ chatID: '00001', chatName: 'chat1', chatMsg: 'aaaaa', unreadNum: 10, chatThumbnail: 'this.props.chatThumbnail' },
            { chatID: '00001', chatName: 'chat1', chatMsg: 'aaaaa', unreadNum: 25, chatThumbnail: 'this.props.chatThumbnail' },
            { chatID: '00002', chatName: 'chat2', chatMsg: 'aaaaa', unreadNum: 422, chatThumbnail: 'this.props.chatThumbnail' },
            { chatID: '00003', chatName: 'chat3', chatMsg: 'aaaaa', unreadNum: 1, chatThumbnail: 'this.props.chatThumbnail' },
            { chatID: '00004', chatName: 'chat4', chatMsg: 'aaaaa', unreadNum: 7, chatThumbnail: 'this.props.chatThumbnail' },
            { chatID: '00005', chatName: 'chat5', chatMsg: 'aaaaa', unreadNum: 49, chatThumbnail: 'this.props.chatThumbnail' },
            { chatID: '00006', chatName: 'chat6', chatMsg: 'aaaaa', unreadNum: 100, chatThumbnail: 'this.props.chatThumbnail' },
            { chatID: '00007', chatName: 'chat7', chatMsg: 'aaaaa', unreadNum: 245, chatThumbnail: 'this.props.chatThumbnail' },
            { chatID: '00008', chatName: 'chat8', chatMsg: 'aaaaa', unreadNum: 64, chatThumbnail: 'this.props.chatThumbnail' },
            { chatID: '00009', chatName: 'chat9', chatMsg: 'aaaaa', unreadNum: 78, chatThumbnail: 'this.props.chatThumbnail' },
            { chatID: '00001', chatName: 'chat1', chatMsg: 'aaaaa', unreadNum: 79, chatThumbnail: 'this.props.chatThumbnail' },
            { chatID: '00001', chatName: 'chat1', chatMsg: 'aaaaa', unreadNum: 87, chatThumbnail: 'this.props.chatThumbnail' }
            ]
        }

    }

    showModal1 = () => {
        this.setState({
            visible1: true,
        });
    }

    showModal2 = () => {
        this.setState({
            visible2: true,
        });
    }

    handleOk1 = async (e) => {
        console.log(this.state.groupName);
        let log = await Caller.createNewGroup(this.state.clientID, this.state.groupName);
        console.log(log)
        alert(log.log)
        this.setState({
            visible1: false,
            groupName: ''
        });
    }

    handleOk2 = async (e) => {
        console.log(this.state.joinGroupName);
        let log = await Caller.joinGroup(this.state.clientID, this.state.joinGroupName);
        console.log(log)
        alert(log.log)
        this.setState({
            visible2: false,
            joinGroupName: ''
        });
    }

    handleCancel1 = (e) => {
        console.log(e);
        this.setState({
            visible1: false,
            groupName: ''
        });
    }

    handleCancel2 = (e) => {
        console.log(e);
        this.setState({
            visible2: false,
            joinGroupName: ''
        });
    }

    onInputChange = field_name => e => {
        this.setState({ [field_name]: e.target.value })
    }



    render() {
        console.log('data', this.state.chatTabList)
        return (
            <div className='chatlist-container'>
                <div className='header'> <div style={{ paddingTop: '3vh' }}>Chat</div></div>
                <div className='chatlist-content demo-infinite-container' style={{ overflow: 'auto' }} >
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={0}
                        loadMore={this.handleInfiniteOnLoad}
                        hasMore={!this.state.loading && this.state.hasMore}
                        useWindow={false}
                    ></InfiniteScroll>
                    <List
                        dataSource={this.state.chatTabList}
                        renderItem={item => (
                            <ChatTab item={item} callback={this.props.callback}></ChatTab>
                        )}
                    >
                    </List>
                    <InfiniteScroll />
                </div>
                <div className='chatlist-footer'>
                    <Row style={{ paddingTop: '2vh' }}>
                        <Button onClick={this.showModal1} style={{ margin: 5 }}>Create Group</Button>
                        <Modal
                            title="Please enter the group name"
                            visible={this.state.visible1}
                            onOk={this.handleOk1}
                            onCancel={this.handleCancel1}
                        >
                            <Input placeholder="Group name" value={this.state.groupName}
                                onChange={this.onInputChange('groupName')} />
                        </Modal>
                        <Button onClick={this.showModal2} style={{ margin: 5 }}>Join Group</Button>
                        <Modal
                            title="Please enter the group name you want to join"
                            visible={this.state.visible2}
                            onOk={this.handleOk2}
                            onCancel={this.handleCancel2}
                        >
                            <Input placeholder="Group name" value={this.state.joinGroupName}
                                onChange={this.onInputChange('joinGroupName')} />
                        </Modal>
                        <Button type='danger' style={{ margin: 5 }}>Logout</Button>
                    </Row>
                </div>
            </div>
        )
    }
}

export default ChatList;