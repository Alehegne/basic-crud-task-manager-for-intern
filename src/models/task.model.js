const { default: mongoose } = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["completed", "pending", "failed"],
  },
});

module.exports = mongoose.model("tasks", taskSchema);
