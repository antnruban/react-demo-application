import React from 'react';
import { render } from 'react-dom';
import App from './App';
import HomePage from './HomePage/HomePage';
import { UserList } from './UserList/UserList';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="users" component={UserList} />
    </Route>
  </Router>,
  document.getElementById('root')
);
