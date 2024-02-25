import { useState } from "react"
import { TaskList } from "./TaskList"

export const ToDoApp = () => {

    const [newTask, setNewTask] = useState<string>('')
    const [taskList, setTaskList] = useState<string[]>([])

    const handleAddtask = () => {
        if(newTask.trim() === '') return 
        setTaskList(prevTasks => [...prevTasks, newTask])
        setNewTask('')
    }

    const handleDeleteTask = (index: number) => {
        setTaskList(tasks => tasks.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input 
                    type="text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="New Task"
                />
                <button onClick={handleAddtask}>Add Task</button>
            </div>
            <TaskList taskList={taskList} deleteTask={handleDeleteTask}></TaskList>
        </div>
    )
}
