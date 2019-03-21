import React, { Component } from 'react'
import { Divider } from 'antd'
import '../style-css/body.css';
import ChatList from './ChatList.jsx'
import ChatPart from './ChatPart';

class ActivePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '',
            clientID: this.props.clientID,
            groupName: '',
            activeChat: 'false',
            leaveGroupName: '',
            chatTabList:[]
        }
        console.log(this.state.clientID);
    }

    handleBackAndLeave = () => {
            console.log('willLeave',this.state.chatTabList);
            console.log('leaveeee',this.state.leaveGroupName);
            if(this.state.leaveGroupName !== ''){
                //this.state.chatTabList.map(())
                for(let i in this.state.chatTabList){
                    if(this.state.chatTabList[i].groupName == this.state.leaveGroupName){
                        const data = this.state.chatTabList;
                        data.pop(i);
                        this.setState({chatTabList:data});
                        console.log('hhhhhhhhhhhh',this.state.chatTabList);
                        break;
                    }
                }
            }
            else {
                for(let i in this.state.chatTabList){
                    if(this.state.chatTabList[i].groupName === this.state.groupName){
                        const data = this.state.chatTabList;
                        data[i].activeChat = false ;
                        this.setState({chatTabList:data});
                        break;
                    }
                }
            }
            console.log('done leaveOrBack',this.state);
        
    }

    handleAddChatTabList = (data) => {
        this.setState({chatTabList:[...this.state.chatTabList, data]});
        console.log('fff',this.state.chatTabList)
    }

    myCallback = (data) => {
        console.log(data)
        this.setState({ groupName: data.groupName, activeChat: data.activeChat, leaveGroupName: data.groupName })
    }
    
    getActivePageState = () => {
        return this.state ;
    }

    render() {
        const data = { clientID: this.state.clientID, groupName: this.state.groupName }
        console.log("dataaa", data)
        return (
            <div className="body">
                <div className="chat-list">
                    <ChatList callback={this.myCallback} clientID={this.state.clientID} chatTabList={this.state.chatTabList} handleAddChatTabList={this.handleAddChatTabList}/>
                </div>
                {/* <Divider type="vertical" /> */}
                {
                    this.state.activeChat == 'true' &&
                    (<div className="chat-part">
                        <ChatPart data={data} callback={this.myCallback} handleBackAndLeave={this.handleBackAndLeave} />
                    </div>)
                }
            </div>
        )
    }
}

export default ActivePage;