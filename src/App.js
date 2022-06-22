import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const handleDelete = (id) => {
    // check if is the last state
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Supermarket List</h1>
      <br />
      <Form tasks={tasks} setTasks={setTasks} />
      <br />
      <List tasks={tasks} deleteTask={handleDelete} />
    </div>
  );
}
