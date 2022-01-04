const express = require("express");
const cors = require("cors");
const Mongoose = require("mongoose");
require("dotenv").config();

const boardRoute = require("./routes/boardRoute");

const app = express();

// Connect DB
Mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connection was successfully.");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/", boardRoute);

// Handle production
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
