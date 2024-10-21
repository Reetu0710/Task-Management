"use client";
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [editTask, seteditTask] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Add the task..
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
        toast.success("Task added successfully!");
    };

    // Edit the task..
    const updateTask = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
        seteditTask(null);
        toast.success("Task updated successfully!");
    };

    // Delete the task...
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
        toast.error("Task deleted successfully!");
    };

    // Mark Task as Completed..
    const markTaskAsCompleted = (id) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.map((task) => 
                task.id === id ? { ...task, completed: !task.completed } : task
            );
            return updatedTasks.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
        });
    };

    // Sort the task by priority..
    const sortTasksByPriority = () => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        setTasks((prevTasks) => 
            [...prevTasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
        );
    };

    // Filter tasks based on search term
    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="main-div">
            <div className="taskManager">
                <figure>
                    <figcaption>Task Management App</figcaption>
                </figure>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by title or description... "
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input-field search-bar"
                    />
                    <span className="search-icon">🔍</span> 
                </div>

                <TaskForm 
                    addTask={addTask} 
                    editTask={editTask} 
                    updateTask={updateTask}
                />
                <button className="btn" onClick={sortTasksByPriority}>Sort by Priority</button>
                <TaskList
                    tasks={filteredTasks} 
                    editTask={(task) => seteditTask(task)}
                    deleteTask={deleteTask}
                    markTaskAsCompleted={markTaskAsCompleted}
                />
            </div>
            <ToastContainer />
        </div>
    );
};

export default TaskManager;
