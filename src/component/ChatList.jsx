import React, { Component } from 'react';
import { Layout, Modal, Row, Input, Button } from 'antd';
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import '../style-css/ChatList.css';
import ChatTab from './ChatTab';
import * as Caller from '../utility/callFunction'
import { withRouter } from 'react-router-dom'

const { Header, Footer, Content } = Layout;

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientID: this.props.clientID,
            chatTabList: [],
            visible1: false,
            visible2: false,
            groupName: '',
            joinGroupName: '',
<<<<<<< HEAD
            currentGroupList: [],
            chatTabList: []
=======
            chatTabList: [],
>>>>>>> a64b992d18a4dce8d0dd81d4eacbf6259e1ce99b
        }

    }

    componentDidMount() {

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
<<<<<<< HEAD
        this.state.currentGroupList.push(this.state.groupName);
=======
        const data = { groupName: this.state.groupName, unreadNum: 10, chatThumbnail: 'this.props.chatThumbnail' }
>>>>>>> a64b992d18a4dce8d0dd81d4eacbf6259e1ce99b
        console.log(log)
        alert(log.log)
        this.setState({
            visible1: false,
            chatTabList: [...this.state.chatTabList, data]
        });
    }

    handleOk2 = async (e) => {
        console.log(this.state.joinGroupName);
        let log = await Caller.joinGroup(this.state.clientID, this.state.joinGroupName);
<<<<<<< HEAD
        this.state.currentGroupList.push(this.state.joinGroupName);
=======
        const data = { groupName: this.state.joinGroupName, unreadNum: 10, chatThumbnail: 'this.props.chatThumbnail' }
>>>>>>> a64b992d18a4dce8d0dd81d4eacbf6259e1ce99b
        console.log(log)
        alert(log.log)
        this.setState({
            visible2: false,
            chatTabList: [...this.state.chatTabList, data]
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

    handleLogout = () => {
        this.setState({ clientID: '' });
        console.log(this.state.clientID);
        this.props.history.push('/');
    }

    handleCreateGroup = () => {
        Caller.createNewGroup(this.state.clientID, this.state.groupName);
        console.log('new group :', this.state.groupName, 'by', this.state.clientID);
    }

    handleJoinGroup = () => {
        Caller.joinGroup(this.state.clientID, this.state.joinGroupName);
        console.log(this.state.clientID, 'join', this.state.joinGroupName);
    }

    handleUpdateChatTabList = () => {
        let list = [];
        for(var i in this.state.currentGroupList){
            list.push({chatName: i, unreadNum: Object.keys(Caller.getUnreadMessage(this.state.clientID,i).message).length})
        }
        this.setState({chatTabList: list});
    }


    render() {
        // console.log('data', this.state.chatTabList)
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
                        <Button type='danger' style={{ margin: 5 }} onClick={this.handleLogout}>Logout</Button>
                    </Row>
                </div>
            </div>
        )
    }
}

export default withRouter(ChatList);