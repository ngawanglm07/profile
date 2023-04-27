import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
// import Login from './pages/Login';
// import Chat from './pages/Chat';
// import Signup from './pages/Signup';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Topp2 from './components/Topp2';

function App() {

  
  return (
    <BrowserRouter>
     <Navigation/>
     <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/login" element={<Topp2/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
