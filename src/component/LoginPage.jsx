import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col, Card } from 'antd';
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
        let id = e.target.value;
        this.state.clientID = id;
        console.log(this.state.clientID);
    }


    handleLogIn = () => {
        if(this.state.clientID != ''){
            this.props.passID('na hee');
            this.props.history.push('/chat');
        }
        else alert('Fill in your username');
    }

    render() {
        return (
            <div className='parent1'>
                <div className="header-project">PARALLEL miniproject</div>
                <Card className='username' style={{ width: "25%" }}>
                    <div><Input placeholder="Type your username" onChange={this.handleChange} /></div>
                    <div style={{ margin: 20 }} onClick={this.handleLogIn}><Button>Login</Button></div>
                </Card>
            </div >
        )
    }
}

export default withRouter(LoginPage);