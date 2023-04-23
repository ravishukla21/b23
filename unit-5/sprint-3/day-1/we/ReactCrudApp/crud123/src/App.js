import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Components/MainRoutes';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <h1>CRUD APP</h1>
      <Navbar/>
      <MainRoutes/>
      
      
    </div>
  );
}

export default App;
