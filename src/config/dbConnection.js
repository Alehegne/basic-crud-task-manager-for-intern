const mongoose = require("mongoose");

const connectToDatabase = () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connected successfully to databases");
  } catch (error) {
    console.log("error connectig to the databases");
    return;
  }
};

module.exports = connectToDatabase;
