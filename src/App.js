import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import ChatPart from './component/ChatPart';
import LoginPage from './component/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Route path="/" component={() => <LoginPage />} exact />
          <Route path="/chat" component={() => <ChatPart />} />
        </div>
      </div>
    )
  }
}

export default App;
