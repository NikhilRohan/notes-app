import "./App.css";
import Editor from "./Components/Editor/Editor";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      Notes App
      <Editor />
      <Sidebar />
    </div>
  );
}

export default App;
