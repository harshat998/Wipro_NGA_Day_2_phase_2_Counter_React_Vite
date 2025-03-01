import React, { Component } from 'react';

class UserList extends Component {
  // This is a constructor where we get the props from App.jsx.
  constructor(props) {
    super(props);
  }

  // componentDidMount is a lifecycle method that runs when the component is added to the page.
  componentDidMount() {
    console.log("UserList (Class Component) has mounted!");
  }

  render() {
    const { users } = this.props; // We get the users from the parent component
    return (
      <div>
        <h2>User List (Class Component)</h2>
        {users.length === 0 ? (
          <p>No users available.</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default UserList;
