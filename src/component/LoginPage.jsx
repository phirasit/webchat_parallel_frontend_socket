import React, { Component } from 'react';
import { Input, Button, Card } from 'antd';
import '../style-css/LoginPage.css'
import { withRouter } from 'react-router-dom'


class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            clientID: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            clientID: e.target.value
        })
    }

    handleLogIn = () => {
        if (this.state.clientID !== '') {
            this.props.passID(this.state.clientID);
            this.props.history.push('/chat');
        }
        else alert('Fill in your username');
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            console.log('enterrrrrrr')
            if (this.state.clientID !== '') {
                this.props.passID(this.state.clientID);
                this.props.history.push('/chat');
            }
            else alert('Fill in your username');
        }
    }

    render() {
        return (
            <div className='parent1'>
                <div className="header-project">PARALLEL miniproject</div>
                <Card className='username' style={{ width: "25%" }}>
                    <div><Input placeholder="Type your username" onChange={this.handleChange} onKeyPress={this.handleEnter} /></div>
                    <div style={{ margin: 20 }} onClick={this.handleLogIn}><Button>Login</Button></div>
                </Card>
            </div >
        )
    }
}

export default withRouter(LoginPage);