import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Tasks from './components/Tasks';
import Leaves from './components/Leaves';
import EditProfile from './components/EditProfile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/tasks" element={<Tasks/>}></Route>
        <Route path="/leaves" element={<Leaves/>}></Route>
        <Route path="/editprofile" element={<EditProfile/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
