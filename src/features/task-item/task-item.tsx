import {Task} from "../../types/task";
import useTaskContext from "../../context/TaskContext";
import {useState} from "react";
import TaskItemInfo from "./task-item-info";
import TaskItemEdit from "./task-item-edit";

interface TaskItemProps {
  task: Task
}

const TaskItem = ({task}: TaskItemProps) => {
  const {deleteTask, updateTask} = useTaskContext()
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [file, setFile] = useState<File | null | undefined>(task.file);
  const [completed, setCompleted] = useState(task.completed);

  const handleSave = () => {
    updateTask({
      ...task,
      title,
      description,
      completed,
      file
    })
    setIsEditing(false)
  }

  if(isEditing) {
    return (
      <li className="p-3">
        <TaskItemEdit
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          setFile={setFile}
          completed={completed}
          setCompleted={setCompleted}
          handleSave={handleSave}
          setIsEditing={setIsEditing}
        />
      </li>
    )
  }

  return (
    <li className="p-3">
      <TaskItemInfo
        task={task}
        setIsEditing={setIsEditing}
        deleteTask={deleteTask}
      />
    </li>
  )
}

export default TaskItem;
