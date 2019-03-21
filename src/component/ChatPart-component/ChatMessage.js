import React, { Component } from 'react'
import './message.css';
import disImg from './img/images.png'
import { List, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import * as Caller from '../../utility/callFunction';
import ReactDOM from 'react-dom';

class ChatMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: '',
            isLeft: 'false',
            time: '',
            clientID: '',
            clientImg: disImg,
            groupName: '',
            loading: false,
            hasMore: true,
        }
    }

    async componentDidMount() {
        console.log('name:', this.props.data.clientID, 'group:', this.props.data.groupName)
        let message = await Caller.getMessage(this.props.data.clientID, this.props.data.groupName)
        console.log('message', message)

        this.setState({
            data: message
        });
        this.scrollBottom()

    }

    // componentDidMount() {
    //     this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    //   }
    //   componentWillUnmount() {
    //     clearInterval(this.interval);
    //   }

    async componentWillReceiveProps(nextProps) {
        console.log('nextProps : ', nextProps)
        let message = await Caller.getMessage(nextProps.data.clientID, nextProps.data.groupName)
        console.log('messageee', message)

        this.setState({
            data: message
        });
        this.scrollBottom()
    }

    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
            loading: true,
        });
        if (data.length > 14) {
            // message.warning('Infinite List loaded all');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
    }

    scrollBottom = () => {
        console.log('fffff')
        const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
        if (messagesContainer != null) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }

    render() {
        return (
            <div className="message-part">
                <div className="demo-infinite-container" style={{ overflow: 'auto' }}
                    ref={el => {
                        this.messageContainer = el;
                    }}
                >

                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={1}
                        useWindow={false}
                    >
                        <List
                            dataSource={this.state.data}
                            renderItem={item => {
                                console.log(item)
                                return (<div>
                                    {item.isLeft == "true" && (
                                        <div>
                                            <div className="single-message">
                                                <div className='image-cropper'>
                                                    <img src={item.clientImg} ></img>
                                                </div>
                                                <div style={{ margin: "10px", color: "grey" }}>{item.clientName}</div>
                                                <div style={{ margin: "10px", color: "lightGray" }}>{item.time}</div>
                                            </div>
                                            <div className="talk-bubble-left tri-right round btm-left">
                                                <div className="talktext-left">
                                                    <p>{item.texts}</p>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                    {item.isLeft == "false" && (
                                        <div>
                                            < div className="talk-bubble-right tri-right round btm-right" >
                                                <div className="talktext-right">
                                                    <p>{item.texts}</p>
                                                </div>
                                            </div >
                                            <div style={{ marginRight: "20px", color: "lightGray", textAlign: "right" }}>{item.time}</div>
                                        </div>
                                    )
                                    }
                                </div>)
                            }}
                        >
                        </List>
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default ChatMessage