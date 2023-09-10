import React from "react";
import TodoItem from "./TodoItem"; // Assume you have a TodoItem component

function TodoList({ todos, removeTodo }) {
  return (
    <div className="flex flex-col items-center">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className=" max-w-lg p-4 mb-4 w-full h-full rounded-lg shadow-neon"
        >
          <TodoItem todo={todo} removeTodo={removeTodo} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
