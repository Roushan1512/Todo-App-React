import { useState } from "react";
import "../css/style.css";
export default function Form({ tasks, setTasks }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", id: 0, done: false });
  const [c, setC] = useState(1);
  function submitted(e) {
    e.preventDefault();
    if (todo.name.trim().length != 0) {
      setC(c + 1);
      setTasks([todo, ...tasks]);
    }
    setTodo({ name: "", id: 0, done: false });
  }
  return (
    <div>
      <form onSubmit={submitted} className="theform">
        <input
          onChange={(e) =>
            setTodo({ name: e.target.value, id: c, done: false })
          }
          value={todo.name}
          type="text"
          className="textarea"
          placeholder="Enter Tasks"
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
}
