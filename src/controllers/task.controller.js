const {
  getTaskService,
  postTaskService,
  markAsCompleletedService,
  deleteTaskService,
} = require("../services/task.service");
const response = require("../utils/response");

async function getTaskController(req, res) {
  try {
    const tasks = await getTaskService();
    if (!tasks || tasks.length == 0) {
      return response(res, 200, false, "no tasks avalaible");
    }
    return response(res, 200, true, "fetched successfully", tasks);
  } catch (error) {
    console.log("error fetching tasks");
    return response(res, 500, false, "server error", (error = error));
  }
}
async function postTaskController(req, res) {
  try {
    const { title, description } = req.body | [];
    if (!title) {
      return response(res, 403, false, "please,include the title");
    }
    const res = postTaskService(title, description);
    if (!res) {
      return response(res, 400, false, "no tasks avalaible");
    }

    return response(res, 200, false, "task addedd successfully", res);
  } catch (error) {
    console.log("error posting tasks");
    return response(res, 500, false, "server error", (error = error));
  }
}

async function markAsCompleleted(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return response(res, 403, false, "please,include the task id");
    }
    const task = await markAsCompleletedService(id);
    if (!task) {
      return response(res, 404, false, "task not found");
    }
    return response(res, 200, true, "task marked as completed", task);
  } catch (error) {
    console.log("error marking task as completed");
    return response(res, 500, false, "server error", (error = error));
  }
}

async function deleteTaskController(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return response(res, 403, false, "please,include the task id");
    }
    const deletedTask = await deleteTaskService(id);
    if (!deletedTask) {
      return response(res, 404, false, "task not found");
    }

    return response(res, 200, true, "task deleted successfully", deletedTask);
  } catch (error) {
    console.log("error deleting task");
    return response(res, 500, false, "server error", (error = error));
  }
}

module.exports = {
  getTaskController,
  postTaskController,
  markAsCompleleted,
  deleteTaskController,
};
