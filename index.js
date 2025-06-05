const express = require("express");
const connectToDatabase = require("./src/config/dbConnection");
require("dotenv").config();
const taskRouter = require("./src/routers/task.router");

const app = express();
app.use(express.urlencoded());
app.use(express.json());
connectToDatabase();

app.use("/api/tasks", taskRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
