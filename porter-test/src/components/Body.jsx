import React, { useState } from "react";
import '../styles/Body.css';

function Body(){

    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [taskText, setTaskText] = useState("");


    const addTask = () => {
        if (taskText.trim() === "") {
            alert("Por favor, insira uma tarefa!");
            return;
        }

        setTasks([...tasks, taskText]);
        setTaskText("");
    };

    const completeTask = (index) => {
        const taskToComplete = tasks[index];
        setCompletedTasks([...completedTasks, taskToComplete]);

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const deleteTask = (index, isCompleted) => {
        if (isCompleted) {
            const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
            setCompletedTasks(updatedCompletedTasks);
        } else {
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks(updatedTasks);
        }
    };


    return(
        <body>
                <div className="container">
                <h1>To-Do List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        value={taskText}
                        onChange={(e) => setTaskText(e.target.value)}
                        placeholder="Digite sua tarefa"
                    />
                    <button onClick={addTask}>Inserir</button>
                </div>
                <div className="panels-container">
                    <div className="panel">
                        <h2>Tarefas Adicionadas</h2>
                        <ul>
                            {tasks.map((task, index) => (
                                <li key={index}>
                                    {task}{" "}
                                    <button onClick={() => completeTask(index)}>Concluir</button>{" "}
                                    <button onClick={() => deleteTask(index, false)}>Deletar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="panel">
                        <h2>Tarefas Concluídas</h2>
                        <ul>
                            {completedTasks.map((task, index) => (
                                <li key={index}>
                                    {task} <button onClick={() => deleteTask(index, true)}>Deletar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default Body;