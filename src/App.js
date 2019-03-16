import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import ChatPart from './component/ChatPart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Route path="/" component={() => <ChatPart />} exact />
        </div>
      </div>
    )
  }
}

export default App;
