import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, updateTask }) => {
    const [taskDetails, setTaskDetails] = useState({ title: '', description: '', priority: 'low' });

    useEffect(() => {
        if (editTask) {
            setTaskDetails(editTask);
        } else {
            setTaskDetails({ title: '', description: '', priority: 'low' });
        }
    }, [editTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editTask) {
            updateTask({ ...taskDetails });
        } else {
            addTask({ ...taskDetails, id: Date.now(), completed: false });
        }
        setTaskDetails({ title: '', description: '', priority: 'low' });
    };

    return (
        <form onSubmit={handleSubmit} className="taskForm">
            <input
                type="text"
                placeholder="Enter task title..."
                value={taskDetails.title}
                onChange={(e) => setTaskDetails({ ...taskDetails, title: e.target.value })}
                required
                className="input-field"
            />
            <input
                type="text"
                placeholder="Enter task description..."
                value={taskDetails.description}
                onChange={(e) => setTaskDetails({ ...taskDetails, description: e.target.value })}
                className="input-field"
            />
            <select
                value={taskDetails.priority}
                onChange={(e) => setTaskDetails({ ...taskDetails, priority: e.target.value })}
                className="input-field"
            >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button type="submit" className="btn">{editTask ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default TaskForm;
