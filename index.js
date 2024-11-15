require("dotenv").config();

const express = require("express");
const trainingRoutes = require("./routes/trainingRoutes");
const logger = require("./middleware/logger");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.use(express.json());


app.use(logger);

app.use("/trainings", trainingRoutes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
