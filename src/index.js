import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { UserList } from './UserList/UserList';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

render(
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/users" component={UserList} />
    </Router>,
  document.getElementById('root')
);
