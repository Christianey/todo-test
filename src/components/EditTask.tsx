import { useTasks } from "../TasksContext";

const EditTask = () => {
  const { taskDetails, setTaskDetails } = useTasks();

  const handleDelete = () => {
    setTaskDetails({
      ...taskDetails,
      tasks: taskDetails.tasks.filter(
        (task) => task.id !== taskDetails.currentTask?.id
      ),
      currentTask: null,
    });
  };

  const handleSave = () => {
    setTaskDetails({
      ...taskDetails,
      tasks: taskDetails.tasks.map((task) => {
        if (task.id === taskDetails.currentTask?.id) {
          return taskDetails.currentTask;
        }
        return task;
      }),
      currentTask: null,
    });
  };

  if (!taskDetails.currentTask) {
    return (
      <div className="flex justify-center items-center h-full flex-1">
        <div className="flex flex-col p-4 gap-1 items-center justify-center h-[8rem]">
          <p className="text-[#071D55] text-2xl font-bold">No task selected.</p>
          <p className="text-sm">Create and edit to get started.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 h-full flex flex-col">
      <div className="bg-primary-bg flex p-4 gap-4 items-center justify-center h-[8rem]">
        <h4 className="text-white text-2xl font-bold">Edit Task</h4>
      </div>
      <div className="relative p-4 grow">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="name" className="tracking-widest">
            Task Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 border-[#CBCBCB] rounded-[9px] h-[69px] p-6 text-[#0D2972] text-xl"
            placeholder="Enter Task Name"
            value={taskDetails.currentTask.name}
            onChange={(e) =>
              setTaskDetails({
                ...taskDetails,
                currentTask: {
                  ...taskDetails.currentTask,
                  name: e.target.value,
                  completed: taskDetails?.currentTask!.completed,
                  id: taskDetails.currentTask!.id,
                },
              })
            }
          />
        </div>

        <div className="flex gap-4 absolute bottom-4 w-[95%]">
          <button
            className="bottom-4 rounded-md p-4 right-4 bg-[#AB3535] flex justify-center items-center  border-2 border-[#720D0D] shadow-[inset_0_3px_1px_rgba(168,181,222,0.5),0px_4px_4px_rgba(0,0,0,0.25)] text-white basis-1/4 [text-shadow:_0_2px_0_rgb(0_0_0)] font-bold"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="bottom-4 rounded-md p-4 right-4 bg-[#3556AB] flex justify-center items-center  border-2 border-[#123EB1] shadow-[inset_0_3px_1px_rgba(168,181,222,0.5),0px_4px_4px_rgba(0,0,0,0.25)] text-white grow [text-shadow:_0_2px_0_rgb(0_0_0)] font-bold"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
