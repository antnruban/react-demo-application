import React from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <div className="header-menu">
          <ul className="menu-list">
            <li className="menu-item"><Link to="/users">users</Link></li>
            <li className="menu-item"><a href="#">some other</a></li>
            <li className="menu-item"><a href="#">about</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
