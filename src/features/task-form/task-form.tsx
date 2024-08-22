import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import useTaskContext from "../../context/TaskContext";

const TaskForm = () => {
  const {addTask} = useTaskContext()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleInputFileClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.target.value = ''
    setFile(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(title && description) {
      addTask({id: uuidv4(), title, description, completed: false,  file: file ? file : null})
      setTitle('')
      setDescription('')
      setFile(null)
      e.target["file"].value = ''
    }
  }


  return (
    <form onSubmit={handleSubmit} className="border rounded-md border-blue-400 p-10 flex flex-col">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
        className="mt-1 block px-3 py-2 mb-5 bg-blue-50 rounded-md text-md shadow-sm placeholder-slate-600
        focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        required
        className="mb-5 bg-blue-50 rounded-md text-md shadow-sm placeholder-slate-600 px-3 py-2 focus:outline-none
        focus:ring-1 focus:ring-blue-500"
      />
      <input
        type="file"
        name="file"
        onClick={handleInputFileClick}
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        className="mb-5 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full
        file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
      />
      <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-2 rounded-md font-semibold">
        Add task
      </button>
    </form>
  )
}

export default TaskForm;
