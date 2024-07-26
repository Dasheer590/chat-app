const users = [];

const addUser = ({ id, name, room }) => {
  // Clean the data
  name = name ? name.trim().toLowerCase() : null;
  room = room ? room.trim().toLowerCase() : null;

  // Validate the data
  if (!name || !room) {
    return { error: 'Username and room are required.' };
  }

  // Check for existing user
  const existingUser = users.find((user) => user.room === room && user.name === name);

  // Validate username
  if (existingUser) {
    return { error: 'Username is taken.' };
  }

  // Store user
  const user = { id, name, room };
  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
