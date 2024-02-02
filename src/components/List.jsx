import Items from "./Items";
import "../css/style.css";
export default function List({ tasks, setTasks }) {
  const sortTasks = tasks
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  let c = 1;
  return (
    <div className="list">
      {sortTasks.map((i) => (
        <Items item={i} key={c++} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
}
