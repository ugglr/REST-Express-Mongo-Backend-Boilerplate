const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Import Routes
const authRoute = require("./routes/auth");

// Connect to DB
mongoose
  .connect(`mongodb://localhost:27017/${process.env.MONGO_DB}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(3000, () => console.log("Server is up and running"));
  })
  .catch(err => {
    console.log(err);
  });

// Middlewares
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
