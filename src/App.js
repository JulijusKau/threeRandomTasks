import "./App.css";
import { TaskOne } from "./task-1/components/TaskOne";
import { TaskTwo } from "./task-2/components/TaskTwo";
import { TaskThree } from "./task-3/components/TaskThree";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "1800px",
      }}
      className="App"
    >
      <TaskOne></TaskOne>
      <TaskTwo></TaskTwo>
      <TaskThree></TaskThree>
    </div>
  );
}

export default App;
