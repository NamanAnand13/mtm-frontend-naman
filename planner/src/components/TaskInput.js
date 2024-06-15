// TaskInput.js
import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add new task..." 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
