import useTaskContext from "../../context/TaskContext";
import {TaskItem} from "../task-item";

const TaskList = () => {
  const {tasks} = useTaskContext()

  if(!tasks.length){
    return (
      <p>No tasks available</p>
    )
  }

  return (
    <ul className="p-6 divide-y divide-blue-400">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
