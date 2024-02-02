import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import List from "./List";
import "../css/style.css";
export default function Todo() {
  const [tasks, setTasks] = useState([]);
  let total = tasks.length;
  let finished = tasks.filter((i) => i.done).length;
  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
      <div className="vertgap" />
      <Footer total={total} finished={finished} />
    </div>
  );
}
