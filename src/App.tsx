import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav";
import developer from "./developerAvatar.png"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar links={["home", "about", "services", "portfolio", "testimonials", "contact"]} />
        <div id="heroBanner">
          <img id="avatarImage" src={developer} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
