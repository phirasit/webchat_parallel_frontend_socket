import React,{Component} from 'react';
import {Form, Icon, Input, Button,Row,Col,Card} from 'antd';
import '../style-css/LoginPage.css'

class LoginPage extends Component {
    constructor(){
        super();
        this.state = {
            clientID : ''
        }
    }

    handleChange = (e) => {
        let id = e.target.value;
        this.state.clientID = id;
        console.log(this.state.clientID);
    }

        render() {
            return(
                <div className='parent1' style={{height:window.screen.height}}>
                    <Card className='username'>
                        <div><Input placeholder="Type your username" onChange={this.handleChange}/></div>
                        <div style={{margin:20}}><Button>Login</Button></div>
                    </Card>
                </div>
            )
        }
}

export default LoginPage;
  