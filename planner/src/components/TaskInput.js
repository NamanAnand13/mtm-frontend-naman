// TaskInput.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { MdAdd } from "react-icons/md";

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            toast.success("Task added successfully!");
            setTask('');
        } else {
            toast.error("Task cannot be empty!");
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="input-field"
                type="text"
                placeholder="Add new task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn" type="submit"><MdAdd style={{ color: "white", fontSize: "1.5em" }}></MdAdd></button>
        </form>
    );
};

export default TaskInput;
