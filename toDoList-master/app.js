const express = require("express");
const path = require("path");
const app = express();
const port = 9000;
const dotenv = require('dotenv')
app.use(express.json());
////////////////////////////////////////////////////////////////////////////////////////////////
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://tarunsharmakavipurapu:Sxk4TZWcZkpwvWYF@cluster0.tpoo4xf.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to mongoDB");
  })

  .catch((err) => console.error("Connection error:", err));
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A Task must have a Title"],
  },
  description: {
    type: String,
    required: [true, "A Task must have a Description"],
    unique: [true],
  },
});

const Todo = mongoose.model("Todo", todoSchema);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// // Define the correct static file path
app.use("/", express.static(path.join(__dirname, "public")));
// // const staticFilePath = path.join(__dirname, "../frontend/dist");
// // app.use(express.static(staticFilePath));

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.log(err);
  }
});

app.get("/todos/:id", async (req, res) => {
try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
})
app.post("/todos", async (req, res) => {
  try {
    const newTask = {
      title: req.body.title,
      description: req.body.description,
    };
    const todos = await Todo.create(newTask);
    res.status(201).json({ status: "success", data: { todo: newTask } });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "sucess",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed deleting",
      err,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
