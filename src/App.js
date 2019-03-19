import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import LoginPage from './component/LoginPage';
import ActivePage from './component/ActivePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Route path="/" component={() => <LoginPage />} exact />
          <Route path="/chat" component={() => <ActivePage />} />
        </div>
      </div>
    )
  }
}

export default App;
