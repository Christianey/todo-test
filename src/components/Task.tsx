import { TaskType } from "../types";
import CheckIcon from "../assets/check-icon.svg";
import { useTasks } from "../TasksContext";

const Task = ({ name, completed, id }: TaskType) => {
  const { taskDetails, setTaskDetails } = useTasks();
  const handleMark = () => {
    setTaskDetails({
      ...taskDetails,
      tasks: taskDetails.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    });
  };

  const handleEdit = () => {
    setTaskDetails({
      ...taskDetails,
      currentTask: { name, completed, id },
    });
  };

  return (
    <div className="flex gap-4 items-center h-[5.7rem] py-[1.44rem] px-[1.19rem] shadow-[0_4px_4px_rgba(0,0,0,0.1)] border border-[#E7E7E7] rounded-md">
      <button className="rounded-full" onClick={handleMark}>
        {completed ? (
          <div className="size-10 rounded-full bg-[#49C25D] flex items-center justify-center">
            <img src={CheckIcon} />
          </div>
        ) : (
          <div className="size-10 rounded-full border-[1.5px] border-[#071D55]"></div>
        )}
      </button>
      <p
        className={`font-bold ${
          completed ? "text-[#8D8D8D] line-through" : "text-[#071D55]"
        }`}
      >
        {name}
      </p>

      <button
        className="rounded-md border border-[#071D55] p-3 ml-auto"
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
};

export default Task;
