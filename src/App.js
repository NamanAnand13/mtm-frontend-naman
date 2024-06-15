// App.js
import React, { useState } from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
      <div className="logo-container">
        <img src='mtm_logo.jpeg' alt='MTM-Logo' className='logo'></img>
        <div className="logo-text">My Trip Mates</div>
      </div>
      <div className="container">
        <h1 className='heading'>Itinerary Planner</h1>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        <ToastContainer></ToastContainer>
      </div>
      <footer>
        <h4>Built with 💛 by {' '}
          <a href="https://github.com/NamanAnand13">Naman</a>
        </h4>
      </footer>
    </div>
  );
}

export default App;
