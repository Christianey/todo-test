import "./App.css";
import EditTask from "./components/EditTask";
import Sidebar from "./components/Sidebar";
import { TasksProvider } from "./TasksContext";

function App() {
  return (
    <TasksProvider>
      <div className="w-full h-dvh flex">
        <Sidebar />
        <EditTask />
      </div>
    </TasksProvider>
  );
}

export default App;
