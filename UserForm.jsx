import React, { useState } from 'react';

function UserForm({ addUser }) {
  // This state holds the input text.
  const [name, setName] = useState('');

  // This function is called when the form is submitted.
  const handleSubmit = (event) => {
    event.preventDefault(); // Stop the form from refreshing the page.
    if (name.trim() === '') return; // Do nothing if the name is empty.
    addUser(name); // Call the addUser function from App.jsx.
    setName(''); // Clear the input field.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter user name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
