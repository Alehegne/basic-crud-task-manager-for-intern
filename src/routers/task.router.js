const {
  getTaskController,
  postTaskController,
  markAsCompleleted,
  deleteTaskController,
} = require("../controllers/task.controller");
const multer = require("multer");

const upload = multer();

const tRouter = require("express").Router();

tRouter.get("/", getTaskController);
tRouter.post("/", upload.none(), postTaskController);
tRouter.patch("/:id", upload.none(), markAsCompleleted);
tRouter.delete("/:id", deleteTaskController);

module.exports = tRouter;
