import React, { Component } from 'react';
import { Layout, Modal, Row, Input, Button } from 'antd';
import { List } from 'antd';
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
            visible1: false,
            visible2: false,
            groupName: '',
            joinGroupName: '',
        }

    }

    // componentDidMount() {
    //     if(this.props.getActivePageState().activeChat === 'false'){
    //         if(this.props.getActivePageState().leaveGroupName != ''){
    //             for(let i in this.state.chatTabList){
    //                 if(this.state.chatTabList[i].groupName === this.props.getActivePageState().leaveGroupName){
    //                     this.state.chatTabList.pop(i);
    //                     break;
    //                 }
    //             }
    //         }
    //         else {
    //             for(let i in this.state.chatTabList){
    //                 if(this.state.chatTabList[i].groupName === this.props.getActivePageState.groupName){
    //                     this.state.chatTabList[i].activeChat = false ;
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    // }

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
        const data = { groupName: this.state.groupName, unreadNum: '', chatThumbnail: 'this.props.chatThumbnail', activeChat: 'false', clientID: this.state.clientID }
        console.log(log)
        if (log.log != 0) alert(log.log)
        this.setState({
            visible1: false,
            groupName: ''
        });
        if (log.code == 0)
            this.props.handleAddChatTabList(data);

    }

    handleOk2 = async (e) => {  //join
        console.log(this.state.joinGroupName);
        let log = await Caller.joinGroup(this.state.clientID, this.state.joinGroupName);
        const data = { groupName: this.state.joinGroupName, unreadNum: '', chatThumbnail: 'this.props.chatThumbnail', activeChat: 'false', clientID: this.state.clientID }
        console.log(log)
        if (log.log != 0)
            alert(log.log)
        this.setState({
            visible2: false,
            joinGroupName: ''
        });
        let foundExist = log.log.indexOf('exist') != -1
        if (foundExist)
            return
        this.props.handleAddChatTabList(data);
        console.log(foundExist)
        //does not exist 
        // console.log(this.props.handleAddChatTabList)
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
        for (var i in this.state.currentGroupList) {
            list.push({ chatName: i, unreadNum: Object.keys(Caller.getUnreadMessage(this.state.clientID, i).message).length })
        }
        this.setState({ chatTabList: list });
    }


    render() {
        // console.log('data', this.state.chatTabList)
        return (
            <div className='chatlist-container'>
                <div className='header'> <div style={{ paddingTop: '3vh' }}>Chat</div></div>
                <div className='chatlist-content demo-infinite-container' style={{ overflow: 'auto' }} >
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={1}
                        useWindow={false}
                    ></InfiniteScroll>
                    <List
                        dataSource={this.props.chatTabList}
                        renderItem={item => (
                            <ChatTab item={item} callback={this.props.callback}></ChatTab>
                        )}
                    >
                    </List>
                    <InfiniteScroll />
                </div>
                <div className='chatlist-footer button'>
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