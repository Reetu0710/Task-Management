import React from 'react';
import TaskManager from '../components/TaskManage';
import '../styles/TaskManager.css';


// Server component to fetch data directly
export default async function HomePage() {
    // Fetch initial tasks (mock data or from an API)
    const initialTasks = [
        { id: 1, title: 'Task 1', priority: 'high', completed: false },
        { id: 2, title: 'Task 2', priority: 'medium', completed: false },
        { id: 3, title: 'Task 3', priority: 'low', completed: false },
    ];

    return (
        <div>          
            <TaskManager initialTasks={initialTasks} />
        </div>
    );
}
