import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  let router = useRoutes(routes);

  return (
    <div className="App">
      <div className="leftSide">
        <Sidebar />
      </div>

      <div className="rightSide">{router}</div>
    </div>
  );
}

export default App;
