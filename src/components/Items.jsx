export default function Items({ item, tasks, setTasks }) {
  function delitem(item) {
    console.log("Deleted : ", item);
    setTasks(tasks.filter((i) => i.id != item.id));
  }
  function completed(item) {
    setTasks(tasks.map((i) => (i.id == item.id ? { ...i, done: !i.done } : i)));
  }
  const comp = item.done ? "iscomplete" : "";
  return (
    <div className="items">
      <span className={comp}>{item.name}</span>
      <span>
        <button onClick={() => delitem(item)} className="delbtn">
          X
        </button>
        <button className="delbtn" onClick={() => completed(item)}>
          {/* {item.done ? "Mark as Not Done" : "Mark as Done"} */}
          {"\u2714"}
        </button>
      </span>
    </div>
  );
}
