import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import LoginPage from './component/LoginPage';
import ActivePage from './component/ActivePage';

class App extends Component {
  constructor(){
    super();
    this.state = { clientID : ''}
  }

  getLoginName = (data) => {
    this.setState({clientID: data});
    console.log(this.state.clientID);
  }

  render() {
    return (
      <div className="App">
        <div>
          <Route path="/" component={() => <LoginPage  passID={this.getLoginName}/>} exact />
          <Route path="/chat" component={() => <ActivePage clientID={this.state.clientID}/>} />
        </div>
      </div>
    )
  }
}

export default App;
