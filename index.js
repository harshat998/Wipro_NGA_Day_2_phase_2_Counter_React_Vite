const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS so the React app can make requests to this server.
app.use(cors());
// Enable JSON parsing so we can read JSON data in requests.
app.use(express.json());

// A simple list of users (imagine these are your friends)
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// GET /users - This endpoint sends the list of users.
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users - This endpoint adds a new user.
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1; // Give the new user a unique id.
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
