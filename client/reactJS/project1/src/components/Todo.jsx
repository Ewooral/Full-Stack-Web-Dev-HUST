import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // to generate unique IDs

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: inputValue,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleTodoClick = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Todo App</h1>
      <form onSubmit={handleFormSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={inputValue}
          onChange={handleInputChange}
          className="py-2 px-4 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="ml-2 py-2 px-4 bg-gray-700 text-white rounded-lg shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Add
        </button>
      </form>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center py-2 px-4 border border-gray-400 rounded-lg shadow-sm ${
              todo.isCompleted ? 'bg-green-100' : ''
            }`}
            onClick={() => handleTodoClick(todo.id)}
          >
            <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.text}</span>
            <button
              className="ml-2 py-1 px-2 bg-red-600 text-white rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={(event) => {
                event.stopPropagation();
                const filteredTodos = todos.filter((t) => t.id !== todo.id);
                setTodos(filteredTodos);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
