// App.js
import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskDescription) => {
    const newTask = {
      id: Math.random().toString(),
      description: taskDescription,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, description: newDescription } : task
      )
    );
  };

  return (
    <div className="App">
      <div className="container">
        <img src='mtm_logo.jpeg' className='logo'></img>
        <h1>Itinerary Planner</h1>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      </div>
    </div>
  );
}

export default App;
