# Task Manager API

A simple Express.js REST API for managing tasks, built with MongoDB and Mongoose.

## Features

- Create, read, update, and delete tasks
- Filter tasks by status (`completed`, `pending`, `failed`)
- Uses MongoDB for persistent storage
- Modular structure for easy maintenance

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or local MongoDB instance

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/taskmanager.git
   cd taskmanager
   ```

2.**Install dependencies:**
    ```sh
    npm install
    ```
3.Set up environment variables:

Create a .env file in the root directory:
  ```
  PORT=5000
  MONGO_DB_URL=YOUR MONGO DB ATLA CONNECTION STRING
  ```

4.start the server
  ```
  npm run dev
  ```
The API will be running at http://localhost:5000

**API Endpoints**
Method	Endpoint	Description
GET	/api/tasks	Get all tasks (optionally filter by status)
POST	/api/tasks	Create a new task
PATCH	/api/tasks/:id	Mark a task as completed
DELETE	/api/tasks/:id	Delete a task

example task object
    {
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "status": "pending"
}

project structure
   src/
  config/
    [dbConnection.js]
  controllers/
    [task.controller.js]
  models/
    [task.model.js]
  routers/
    [task.router.js]
  services/
    [task.service.js]
  utils/
    [response.js]
[index.js]