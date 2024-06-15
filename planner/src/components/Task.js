// Task.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdSave } from "react-icons/md";

const Task = ({ task, deleteTask, updateTask }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedTask, setEditedTask] = useState(task.description);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        if (editedTask.trim()) {
            updateTask(task.id, editedTask);
            toast.success("Task updated successfully!");
            setEditMode(false);
        } else {
            toast.error("Task cannot be empty!");
        }
    };

    const handleDelete = () => {
        deleteTask(task.id);
        toast.error("Task deleted!");
    };

    return (
        <li className="task-item">
            {editMode ? (
                <div>
                    <input
                        className='input-field'
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <button className="btn edit-btn" onClick={handleSave}><MdSave ></MdSave></button>
                </div>
            ) : (
                <div className='taskBar'>
                    {/* <div className='dot'></div> */}
                    <span className="task-content">{task.description}</span>
                    <div className="task-actions">
                        <button className="btn edit-btn" onClick={handleEdit}><MdEdit style={{ color: "white", fontSize: "1.5em" }}
                        ></MdEdit></button>
                        <button className="btn delete-btn" onClick={handleDelete}><MdDelete style={{ color: "white", fontSize: "1.5em" }}></MdDelete></button>
                    </div>
                </div>
            )
            }
        </li >
    );
};

export default Task;
