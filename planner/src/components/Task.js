// Task.js
import React, { useState } from 'react';

const Task = ({ task, deleteTask, updateTask }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task.description);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    updateTask(task.id, editedTask);
    setEditMode(false);
  };

  return (
    <li>
      {editMode ? (
        <div>
          <input 
            type="text" 
            value={editedTask} 
            onChange={(e) => setEditedTask(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.description}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default Task;
