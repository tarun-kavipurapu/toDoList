import React from "react";
 

function TodoItem({ todo, removeTodo }) {
  return (
    <div className="relative" >
      <span className="pr-4">{todo.title} |</span>
      <span>{todo.description}</span>

      <button
        onClick={() => removeTodo(todo._id)}
        className="absolute top-0 right-0 mt-1 mr-1 px-2 py-1 text-red-600 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;
