import React from 'react';

const TaskList = ({ tasks, editTask, deleteTask, markTaskAsCompleted }) => {
    return (
        <div className="taskList">
            {tasks.map((task) => (
                <div key={task.id} className="taskItem" 
                 style={{
                        backgroundColor:
                            task.priority === 'high'
                                ? 'red'
                                : task.priority === 'medium'
                                ? 'yellow'
                                : 'green',
                        color: task.priority === 'medium' ? 'black' : 'white',
                        borderRadius: '0.5rem',
                    }}
                >
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <span>{task.title} - Priority: {task.priority}</span>
                    </span>
                    <div className="button-group">
                        <button onClick={() => markTaskAsCompleted(task.id)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => editTask(task)}>Edit</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
