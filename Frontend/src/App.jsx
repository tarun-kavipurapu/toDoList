import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/Todo";
import axios from "axios";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      try {
        const response = await axios.get("http://localhost:9000/todos/");
        setTodos(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getTodos();
  }, []);

  const addTodo = async (newTodo) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/todos/",
        newTodo
      );

      setTodos([...todos, response.data.data]);
    } catch (error) {
      console.error("Error Posting data:", error);
    }
  };

  const removeTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/todos/${id}`);

      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <header className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-4">
        <h1 className="text-4xl font-bold text-center text-white tracking-wide">
          Awesome<span className="text-pink-400"> Todo</span> List
        </h1>
      </header>
      <main className="p-4">
        <Form addTodo={addTodo} />
        <div className="mt-4 bg-white rounded-lg shadow-md p-4">
          <TodoList todos={todos} removeTodo={removeTodo} />
        </div>
      </main>
    </div>
  );
}

export default App;
