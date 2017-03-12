import React from 'react';
import { UserShow } from './UserShow/UserShow';
import './UserList.css';

const users = [
  { name: 'vasya', surname: 'pupkin', sex: 'male'},
  { name: 'twin', surname: 'pix', sex: 'female'},
  { name: 'foo', surname: 'bar', sex: 'female'}
];

export class UserList extends React.Component {
  render() {
    return (
      <div>
        <ul className="user-list">
        {users.map((user, i) => <UserShow key={i} user={user} />)}
        </ul>
      </div>
    )
  }
}
