const mongoose = require("mongoose");

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
// Todo.find().then(data=>console.log(data));
module.exports = Todo;
