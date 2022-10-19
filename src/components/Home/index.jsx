import React from "react";
import ProgrammingBro from "../../Programming-bro.svg"

function Home() {
  return (
    <div className="home">
      <div id="aboutMe" className="aboutMe">
        <h1>Ahoy ! I am Vignesh Murugan</h1>
        <h4>I create Websites that works for everyone and every browser !</h4>
      </div>
      <div className="developerImage">
        <img alt="Programmer at Work" src={ProgrammingBro} />
      </div>
    </div>
  );
}

export default Home;
