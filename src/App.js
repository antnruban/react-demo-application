import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';
import './App.css';

import { UserList } from './UserList/UserList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-intro">
          <UserList />
        </div>
        <Link to="/users">Users</Link>
      </div>
    );
  }
}
