const Tasks = require("../models/task.model");
async function getTaskService(query) {
  try {
    const filter = {
      ...(query.status && { status: query.status }),
    };
    const tasks = await Tasks.find(filter);
    console.log("tasks:", tasks);
    return tasks;
  } catch (error) {
    console.log("error in task service");
    throw new error("error in task service:", error);
  }
}
async function postTaskService(title, description) {
  try {
    const task = new Tasks({
      title,
      description,
    });
    const savedTask = await task.save();
    console.log("task added successfully:", savedTask);
    return savedTask;
  } catch (error) {
    console.log("error in adding tasks");
    throw new Error("error in adding tasks:", error);
  }
}

async function markAsCompleletedService(id, status) {
  try {
    const task = await Tasks.findByIdAndUpdate(id, status);
    return task;
  } catch (error) {
    console.log("error in marking task as completed");
    throw new Error("error in marking task as completed:", error);
  }
}

async function deleteTaskService(id) {
  try {
    const dt = await Tasks.findByIdAndDelete(id);
    if (!dt) {
      console.log("no task with id:", id);
      return null;
    }
    return dt;
  } catch (error) {
    console.log("error in deleting tasks");
    throw new Error("error in deleting task:", error);
  }
}

module.exports = {
  getTaskService,
  postTaskService,
  markAsCompleletedService,
  deleteTaskService,
};
