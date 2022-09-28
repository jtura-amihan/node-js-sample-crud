const express = require("express");
const mongoose = require("mongoose");
const loginRouter = require("./routes/userLogin.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/hrUserList",  // url where mongodb is running, pede palitan 
  {                                        // hrUserList ung name ng sample db ko sa local ko
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(loginRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});