import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar 
          links = {
            ["home", "about", "services", "portfolio"]
          }
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
