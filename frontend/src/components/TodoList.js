import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'MSWD Project', completed: false },
    { id: 2, title: 'Meeting my friend', completed: false },
    { id: 3, title: 'Going to temple', completed: false },
    // Add more todo items as needed
  ]);

  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');

  const handleToggleCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTask = () => {
    setIsAddingTask(true);
  };

  const handleCreateTask = () => {
    if (newTaskName.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: prevTodos.length + 1, title: newTaskName, completed: false },
      ]);
      setNewTaskName('');
      setIsAddingTask(false);
    }
  };

  const handleCancelAddTask = () => {
    setNewTaskName('');
    setIsAddingTask(false);
  };

  const handleRemoveTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button
        onClick={handleAddTask}
        style={{
          backgroundColor: '#2196F3', // Button background color
          color: '#fff', // Button text color
          padding: '10px 15px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Add a Task
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '8px 0',
              padding: '12px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              htmlFor={`checkbox-${todo.id}`}
            >
              <input
                id={`checkbox-${todo.id}`}
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleCompletion(todo.id)}
                style={{ marginRight: '8px' }}
              />
              <span>{todo.title}</span>
            </label>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <button
                onClick={() => handleRemoveTask(todo.id)}
                style={{
                  textDecoration: 'none',
                  background: 'none',
                  border: 'none',
                  color: '#FF3D00', // Button text color
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Remove Task
              </button>
              <div
                style={{
                  backgroundColor: todo.completed ? '#7ED321' : '#FFCC00',
                  color: '#fff',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  marginLeft: '8px',
                }}
              >
                {todo.completed ? 'Completed' : 'Incomplete'}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {isAddingTask && (
        <div>
          <input
            type="text"
            placeholder="Enter task name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            style={{
              padding: '8px',
              marginRight: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
          <button
            onClick={handleCreateTask}
            style={{
              backgroundColor: '#4CAF50', // Button background color
              color: '#fff', // Button text color
              padding: '8px 16px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Create
          </button>
          <button
            onClick={handleCancelAddTask}
            style={{
              backgroundColor: '#FF3D00', // Button background color
              color: '#fff', // Button text color
              padding: '8px 16px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;