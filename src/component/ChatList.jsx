import React,{Component} from 'react';
import {Layout,Divider,Row,Col,Button} from 'antd';
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import '../style-css/ChatList.css';
import ChatTab from './ChatTab';

const {Header, Footer, Content} = Layout;

class ChatList extends Component{
    constructor(props){
        super(props);
        this.state = {
            clientID : '',
            chatTabList : [{chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 10 , chatThumbnail : 'this.props.chatThumbnail'},
                            {chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 25 , chatThumbnail : 'this.props.chatThumbnail'},
                            {chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 422 , chatThumbnail : 'this.props.chatThumbnail'},
                            {chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 1 , chatThumbnail : 'this.props.chatThumbnail'},
                            {chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 7 , chatThumbnail : 'this.props.chatThumbnail'},
                            {chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 49 , chatThumbnail : 'this.props.chatThumbnail'},
                            {chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 100 , chatThumbnail : 'this.props.chatThumbnail'},
                            {chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 245 , chatThumbnail : 'this.props.chatThumbnail'},
                            {chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 64 , chatThumbnail : 'this.props.chatThumbnail'},
                            {chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 78 , chatThumbnail : 'this.props.chatThumbnail'},
                            {chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 79 , chatThumbnail : 'this.props.chatThumbnail'},
                            {chatID : '00001' ,chatName : 'chat1',chatMsg : 'aaaaa' ,unreadNum : 87 , chatThumbnail : 'this.props.chatThumbnail'}
            ]
        }

    }   

    render() {
        console.log('data',this.state.chatTabList)
        return(
            <div className='chatlist-container'>
                <div className='header'> <div style={{paddingTop:'3vh'}}>Chat</div></div>
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
                                <ChatTab item={item}></ChatTab>
                            )}
                        >
                    </List>
                <InfiniteScroll />
                </div>
                <div className='chatlist-footer'>
                        <Row style={{paddingTop:'3vh'}}>
                            <Button style={{margin:5}}>Create Group</Button>
                            <Button style={{margin:5}}>Join Group</Button>
                            <Button type='danger' style={{margin:5}}>Logout</Button>
                        </Row>
                </div>
            </div>
        )
    }
}

export default ChatList;