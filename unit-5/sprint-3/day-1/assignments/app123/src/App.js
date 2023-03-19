import logo from './logo.svg';
import './App.css';
import Admin from './Pages/Admin';
import MainRoutes from './Pages/MainRoutes';
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <MainRoutes/>

  
    </div>
  );
}

export default App;
