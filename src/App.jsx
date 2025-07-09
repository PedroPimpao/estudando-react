import { useEffect, useState } from "react"
import AddTask from "./components/AddTask.jsx"
import Tasks from "./components/Tasks.jsx"
import Title from "./components/Title.jsx"
import { v4 } from "uuid"

function App(){
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    // useEffect(()=>{
    //     // Call API
    //     const callApi = async ()=>{
    //         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //         const data = await response.json()
    //         // console.log(data)
    //         setTasks(data)
    //     }
    //     callApi()
    // }, [])

    function onTaskClick(taskId){
        const newTasks = tasks.map((task)=>{
            if(task.id == taskId){
                return {...task, isCompleted: !task.isCompleted}
            }
            return task
        })
        setTasks(newTasks)
    }

    function deleteTask(taskId){
        const newTasks = tasks.filter((task)=> task.id !== taskId)
        setTasks(newTasks)
    }

    function onAddTask(title, description){
        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false
        }
        setTasks([...tasks, newTask])
    }

    return (

        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <Title className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</Title>
                <AddTask 
                    onAddTask={onAddTask}
                />
                <Tasks 
                    tasks={tasks} 
                    onTaskClick={onTaskClick} 
                    deleteTask={deleteTask}
                />
            </div>
        </div>

    )
}

export default App