import ProfileImage from "../assets/profile-image.png";
import TrophyImage from "../assets/trophy-image.svg";
import AddIcon from "../assets/add-icon.svg";
import TasksList from "./TasksList";
import { useTasks } from "../TasksContext";
import { generateRandomId } from "../util";

const Sidebar = () => {
  const { taskDetails, setTaskDetails } = useTasks();
  const handleAddTask = () => {
    setTaskDetails({
      ...taskDetails,
      tasks: [
        ...taskDetails.tasks,
        { name: "New Task", completed: false, id: generateRandomId() },
      ],
    });
  };

  return (
    <div className="relative flex flex-col h-full w-[40%] grow-0 shadow-[0_0px_7px_2px_rgba(0,0,0,0.25)]">
      {/* Hello, Avatar */}
      <div className="bg-primary-bg flex p-4 gap-4 h-[8rem]">
        <div className="size-10">
          <img src={ProfileImage} />
        </div>
        <div className="flex flex-col shadow-sm text-white ">
          <h2>Hello, Jhon</h2>
          <p className="italic text-white text-2xl max-w-full font-thin [text-shadow:_0_2px_0_rgb(0_0_0)]">
            What are your plans <br /> for today?
          </p>
        </div>
      </div>

      {/* Go Upgrade */}
      <div className="bg-secondary-bg relative flex p-4 shadow-[inset_0_4px_0_rgba(255,255,255,0.6)] border-2 border-[#9EB031]">
        <div className="flex gap-4 items-center h-[7.25rem]">
          <img src={TrophyImage} />
          <p className="text-primary-text font-bold [text-shadow:_0_2px_0_rgb(255_255_255)] text-xl">
            Go Pro Upgrade Now
          </p>
          <div className="absolute top-0 right-10 flex items-center justify-center p-4 w-[4rem] h-[4.44rem] bg-[#071D55]">
            <p className="text-[#F2C94C] font-bold">$1</p>
          </div>
        </div>
      </div>

      {/* Task List */}
      <TasksList />

      <button
        className="absolute bottom-4 right-4 bg-[#3556AB] flex justify-center items-center size-[3.75rem] rounded-full border-2 border-[#123EB1] shadow-[inset_0_3px_1px_rgba(168,181,222,0.5),0px_4px_4px_rgba(0,0,0,0.25)]"
        onClick={handleAddTask}
      >
        <img src={AddIcon} />
      </button>
    </div>
  );
};

export default Sidebar;
