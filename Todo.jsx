// src/components/Todo.jsx
import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        text: inputValue,
        time: new Date().toLocaleTimeString(),
        color: `#${Math.floor(Math.random()*16777215).toString(16)}`
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className='todo'>
      <h2>To Do List</h2>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Add a new task'
      />
      <button onClick={addTask}>Add</button>
      <ul className='flex flex-col gap-2'>
        {tasks.map((task, index) => (
          <li key={index} style={{ color: task.color }}>
            {task.text} - {task.time}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
