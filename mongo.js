const mongoose = require("mongoose");

const { MONGO_DB_URI } = process.env;
const connectionString = MONGO_DB_URI;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to database MongoDB");
  })
  .catch((err) => {
    console.error(err.message);
  });

process.on("uncaughtException", (err) => {
  console.error(err);
  mongoose.connection.close();
});
