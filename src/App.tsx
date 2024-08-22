import {TaskProvider} from "./context/TaskContext";
import TaskForm from "./features/task-form/task-form";
import TaskList from "./features/task-list/task-list";

function App() {

  return (
    <TaskProvider>
      <div className="bg-gray-900 p-10 min-h-screen md:flex flex-col items-center">
        <h1 className="max-w-3xl min-w-3xl text-center text-blue-400 font-bold text-5xl mb-10 font-semibold italic">
          Task manager
        </h1>
        <div className="max-w-[750px] min-w-[750px] w-[750px]">
          <TaskForm />
          <TaskList />
        </div>

      </div>
    </TaskProvider>
  )
}

export default App
