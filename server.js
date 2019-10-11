const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Configure mongoose to create a connection with MongoDB database
const url = "mongodb+srv://admin:admin@cluster0-6uxyv.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true})
.catch((err) => console.log("Mongoose connect error: " + err));
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Established connection with MongoDB database");
});
// Routes
const userRouter = require("./routes/users");
app.use("/users/", userRouter);

const articlePostRouter = require("./routes/articlePosts");
app.use("/articlePosts", articlePostRouter);

const imagePostRouter = require("./routes/imagePosts");
app.use("/imagePosts", imagePostRouter);
// Configure server to run on port 5000
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});