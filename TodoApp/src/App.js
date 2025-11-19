import ReactDom from "react-dom/client";
import React from "react";
import { useState } from "react";

const App = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [tasks, setTasks] = useState([]);

    const deleteTask = (taskToDelete) => {
        const newTasks = tasks.filter((task) => task !== taskToDelete);
        setTasks(newTasks);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <input id="inputTitletext" type="text" placeholder="Write your task title" value={taskTitle} onChange={
                (e) => {
                    setTaskTitle(e.target.value);
                }
            } />
            <button onClick={() => {
                if(!taskTitle) return;
                setTasks([...tasks, taskTitle])
                setTaskTitle("");
            }}>Add Task</button>
            <ol>
                {tasks.map((task, index) => (
                    <React.Fragment key={index}>
                        <li>{task}</li>
                        <button onClick={() => deleteTask(task)}>Delete</button>
                    </React.Fragment>
                ))}
            </ol>
        </div>
    );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);


