import { createContext, ReactNode, useContext, useState } from "react";
import { TaskType } from "./types";

type Tasks = {
  tasks: TaskType[];
  currentTask: TaskType | null;
};

type TasksProviderState = {
  taskDetails: Tasks;
  setTaskDetails: (user: Tasks) => void;
};

const initialState: TasksProviderState = {
  taskDetails: { tasks: [], currentTask: null },
  setTaskDetails: () => null,
};

const TasksContext = createContext<TasksProviderState>(initialState);

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [taskDetails, setTaskDetails] = useState(initialState.taskDetails);

  return (
    <TasksContext.Provider value={{ taskDetails, setTaskDetails }}>
      {children}
    </TasksContext.Provider>
  );
};
