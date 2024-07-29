# Chat Application

This repository contains the backend for a real-time chat application built with Node.js, Express, and Socket.IO for the backend, and React for the frontend. The application allows users to join chat rooms and send messages to each other in real-time.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Testing with Postman](#testing-with-postman)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This chat application backend handles real-time messaging between users, room management, and message persistence. It provides a seamless experience for users to join chat rooms and communicate in real-time.

## Features

- Real-time messaging
- Join chat rooms
- Display users in the room
- Responsive UI

## Technologies Used

- Node.js
- Express.js
- Socket.IO
- React.js

## Setup and Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/chat-application.git
    cd chat-application
    ```

2. **Navigate to the server directory:**

    ```sh
    cd server
    ```

3. **Install the dependencies:**

    ```sh
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `server` directory with the necessary environment variables (see the [Environment Variables](#environment-variables) section for details).

5. **Start the server:**

    ```sh
    npm start
    ```

## Environment Variables

The project requires the following environment variables to be set:

- `PORT`: The port on which the server runs.

## API Endpoints

The following are the main endpoints provided by the API:

### Send Message

- **URL**: `/messages`
- **Method**: `POST`
- **Body**:
    ```json
    {
      "user": {
        "id": "temporaryId",
        "name": "user1",
        "room": "room1"
      },
      "text": "Hello, world!"
    }
    ```

### Get Messages

- **URL**: `/messages`
- **Method**: `GET`

## Authentication

Currently, the endpoints do not require authentication. Future versions may include JWT or other forms of authentication to secure the endpoints.

## Testing with Postman

To test the API endpoints, you can use Postman:

1. **Install Postman**: Download and install Postman from [here](https://www.postman.com/downloads/).

2. **Send Requests**: Use the Postman interface to send requests to the API endpoints and observe the responses.

## Project Structure

```plaintext
chat-application/
├── server/           # Backend directory
│   ├── index.js      # Entry point for the server
│   ├── users.js      # User management
│   └── ...           # Other server-related files
└── client/           # Frontend directory
    ├── public/       # Public assets
    ├── src/          # Source files
    │   ├── components/ # React components
    │   ├── App.js    # Main React component
    │   └── ...       # Other React-related files
    └── package.json  # Frontend dependencies and scripts

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


