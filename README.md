# Chat Application

This is a real-time chat application built with Node.js, Express, and Socket.IO for the backend, and React for the frontend. The application allows users to join chat rooms and send messages to each other in real-time.

## Features
- Real-time messaging
- Join chat rooms
- Display users in the room
- Responsive UI

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine
- Docker installed if you want to run the backend in a container

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chat-application.git
   cd chat-application/server
2. npm install
      npm install
3. Start the server:
      npm start
## Usage
Open your browser and navigate to http://localhost:3000.
    1. Enter your name and the room you want to join.
    2. Click on the "Sign In" button to join the chat room.
    3. Start sending messages!

## API Endpoints
    Send Message
    URL: /messages

## Method: POST

Body:
    {
  "user": {
    "id": "temporaryId",
    "name": "user1",
    "room": "room1"
  },
  "text": "Hello, world!"
}

## Get Messages
    URL: /messages
    Method: GET

## Project Structure
chat-application/
├── server/             # Backend directory
│   ├── index.js        # Entry point for the server
│   ├── users.js        # User management
│   └── ...             # Other server-related files
└── client/             # Frontend directory
    ├── public/         # Public assets
    ├── src/            # Source files
    │   ├── components/ # React components
    │   ├── App.js      # Main React component
    │   └── ...         # Other React-related files
    └── package.json    # Frontend dependencies and scripts

## Contributing
Contributions are always welcome! Please follow these steps to contribute:

    1.Fork the repository.
    2.Create a new branch (git checkout -b feature-branch).
    3.Make your changes.
    4.Commit your changes (git commit -m 'Add new feature').
    5.Push to the branch (git push origin feature-branch).
    6.Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.


