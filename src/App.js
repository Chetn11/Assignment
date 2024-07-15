import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import AllRoutes from './Router/AllRoutes';
import Footer from './components/Navbar/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
