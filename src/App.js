import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/Todo";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Todo />
    </div>
  );
}

export default App;
