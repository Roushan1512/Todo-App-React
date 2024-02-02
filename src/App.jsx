import Header from "./components/Header";
import Todo from "./components/Todo";
import "./css/style.css";

export default function App() {
  return (
    <div className="appbody">
      <Header />
      <Todo />
    </div>
  );
}
