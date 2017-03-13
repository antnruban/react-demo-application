import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <main id="main" role="main">
            {React.cloneElement(this.props.children)}
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}
