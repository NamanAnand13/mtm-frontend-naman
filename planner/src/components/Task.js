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
    <li className="task-item">
      {editMode ? (
        <div>
          <input 
            type="text" 
            value={editedTask} 
            onChange={(e) => setEditedTask(e.target.value)} 
          />
          <button className="btn edit-btn" onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.description}</span>
          <div className="task-actions">
            <button className="btn edit-btn" onClick={handleEdit}>Edit</button>
            <button className="btn delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;
