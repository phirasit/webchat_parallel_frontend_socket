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
  }

  render() {
    console.log('5555555555',this.state.clientID);
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