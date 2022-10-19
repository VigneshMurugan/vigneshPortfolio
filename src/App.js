import './App.css';
import CustomNavBar from './components/Navbar';
import Home from './components/Home'; 
import configuration from './configuration.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomNavBar brandName="Vignesh Murugan" navlinks={configuration.navLinks}/>
        <Home />
      </header>
    </div>
  );
}

export default App;
