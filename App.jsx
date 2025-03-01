import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import UserList from './UserList'; // We will use our class component version

function App() {
  // State to hold our users.
  const [users, setUsers] = useState([]);

  // Function to fetch users from our backend.
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  // useEffect runs when the component loads.
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to add a new user.
  const addUser = async (name) => {
    try {
      const response = await axios.post('http://localhost:5000/users', { name });
      // Update the list of users with the new user.
      setUsers([...users, response.data]);
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Management System</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
