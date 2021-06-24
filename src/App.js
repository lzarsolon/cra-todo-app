import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <div className="top-bar"></div>
      <div className="todo-app">
        <Header />
        <div className="content">
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
