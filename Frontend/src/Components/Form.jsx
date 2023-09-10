import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

function Form({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      const newTodo = {
        title: title,
        description: description,
      };

      addTodo(newTodo);

      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Add Todo
      </h2>
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo title"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Todo description"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="text-center">
        <Button onClick={handleAddTodo} variant="filled">
          Add Todo
        </Button>
      </div>
    </div>
  );
}

export default Form;
