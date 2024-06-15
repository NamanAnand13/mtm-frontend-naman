// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          updateTask={updateTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;
