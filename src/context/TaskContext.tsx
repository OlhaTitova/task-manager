import {createContext, ReactNode, useContext, useState} from "react";
import {Task} from "../types/task";

interface TaskContextProps {
  tasks: Task[]
  addTask: (task: Task) => void
  updateTask: (task: Task) => void
  deleteTask: (id: string) => void
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined)

export const TaskProvider = ({children}: {children: ReactNode}) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task) => setTasks([task, ...tasks ])
  const updateTask = (updatedTask: Task) => setTasks(tasks
    .map(task => task.id === updatedTask.id ? updatedTask : task))
  const deleteTask = (id: string) => setTasks(tasks.filter(task => task.id !== id))

  return (
    <TaskContext.Provider value={{tasks, addTask, updateTask, deleteTask}}>
      {children}
    </TaskContext.Provider>
  )
}

export default function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) throw Error("useTaskContext can only be used inside an TaskProvider");
  return context;
}
