import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav";
import developer from "./developerAvatar.png"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar links={["home", "about", "services", "portfolio"]} />
        <div id="heroBanner">
          <div id="leftHeroWrapper">
            <p>Ahoy ! I'm Vignesh Murugan</p>
            <p>WEB DEVELOPER | REACT JS | NODE JS</p>
            <p>I am an experienced Web Developer proficient in </p>
            <p>React JS, Node JS based out of Bengaluru, India</p>
          </div>
          <div id="rightHeroWrapper">
            <img id="avatarImage" src={developer} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
