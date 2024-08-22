import {Task} from "../../types/task";
import {Dispatch, SetStateAction} from "react";

interface TaskItemInfoProps{
  task: Task,
  setIsEditing: Dispatch<SetStateAction<boolean>>,
  deleteTask: (id: string) => void
}

const TaskItemInfo = ({task, setIsEditing, deleteTask}: TaskItemInfoProps) => {
  const tasksStatus = task.completed ? "text-green-400" : "text-red-400"

  return (
    <div className="md:flex justify-between gap-x-5 ">
      <div className="overflow-auto break-all">
        <h3 className="text-2xl font-medium text-white mt-5 mb-3">{task.title}</h3>
        <p className="text-sm text-white">{task.description}</p>
        {task.file && (
          <p className="text-white mt-3">
              <span className="font-bold mr-5">
                Attached file:
              </span>
            <a
              href={URL.createObjectURL(task.file)}
              download={task.file.name}
            >
              {task.file.name}
            </a>
          </p>
        )}
        <p className="text-white font-bold">
            <span className="mr-5">
              Status:
            </span>
          <span className={` ${tasksStatus}`}>
                {task.completed ? 'Completed' : 'Incompleted'}
              </span>
        </p>
      </div>
      <div className="md:flex flex-col justify-between">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-2 rounded-md font-semibold mb-3 mt-3"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-400 hover:bg-red-500 text-white px-3 py-2 rounded-md font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItemInfo;
