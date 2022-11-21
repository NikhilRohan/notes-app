import "./App.css";
import Editor from "./Components/Editor/Editor";
import Sidebar from "./Components/Sidebar/Sidebar";
import Split from "react-split";

function App() {
  return (
    <div className="App">
      <Split
        className="split"
        minSize={150}
        sizes={[30, 70]}
        direction="horizontal"
      >
        <Sidebar />
        <Editor />
      </Split>
    </div>
  );
}

export default App;
