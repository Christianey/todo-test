import { useTasks } from "../TasksContext";
import Task from "./Task";

const TasksList = () => {
  const { taskDetails } = useTasks();
  return (
    <div className="p-4 flex flex-col gap-4 overflow-auto pb-14">
      {taskDetails.tasks.map((task, index) => (
        <Task
          completed={task.completed}
          name={task.name}
          id={task.id}
          key={index}
        />
      ))}
    </div>
  );
};

export default TasksList;
