const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = 3005;
mongoose
  .connect("mongodb://localhost:27017/myshop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


const authRoutes = require("./routes/auth");

app.use("/api", authRoutes);


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
