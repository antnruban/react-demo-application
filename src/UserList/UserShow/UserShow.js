import React, { PropTypes } from 'react';

export class UserShow extends React.Component {
  static propTypes = {
      user: React.PropTypes.object.isRequired,
    };

  fullName(firstName, LastName) {
    return `${firstName} ${LastName}`;
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        <li>
          <h4><b>{this.fullName(user.name, user.surname)}</b></h4>
          <div>
            <label>Sex:</label>
            <p>{user.sex}</p>
          </div>
        </li>
      </div>
    )
  }
}
