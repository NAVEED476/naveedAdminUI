import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Display/>}/>
      <Route exact path="/add" element={<Adduser/>}/>
      <Route exact path="/edit" element={<Edituser/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
