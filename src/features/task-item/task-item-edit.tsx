import React from 'react';
import {ChangeEvent, Dispatch, SetStateAction} from "react";

interface TaskItemEditProps {
  title: string,
  setTitle: Dispatch<SetStateAction<string>>,
  description: string,
  setDescription: Dispatch<SetStateAction<string>>,
  setFile: Dispatch<SetStateAction<File | null | undefined>>,
  completed: boolean,
  setCompleted: Dispatch<SetStateAction<boolean>>,
  handleSave: () => void,
  setIsEditing: Dispatch<SetStateAction<boolean>>,
}

const TaskItemEdit = ({
                        title,
                        setTitle,
                        description,
                        setDescription,
                        setFile,
                        completed,
                        setCompleted,
                        handleSave,
                        setIsEditing
}: TaskItemEditProps) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleFileClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    event.target.value = ''
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full mt-1 block px-3 py-2 mb-5 bg-blue-50 rounded-md text-md shadow-sm placeholder-slate-600
        focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full mb-5 bg-blue-50 rounded-md text-md shadow-sm placeholder-slate-600 px-3 py-2
        focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <input
        type="file"
        name="fileEdit"
        onClick={handleFileClick}
        onChange={handleFileChange}
        className="mb-5 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full
        file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
      />
      <label className="text-white mr-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
          className="mr-2"
        />
        Completed
      </label>
      <div className="flex justify-between">
        <button
          onClick={handleSave}
          className="mr-2 bg-blue-400 hover:bg-blue-500 text-white px-3 py-2 rounded-md font-semibold mb-3 mt-3"
        >
          Save
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-2 rounded-md font-semibold mb-3 mt-3"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default TaskItemEdit;
