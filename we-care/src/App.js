import "./Styles/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Navbar/>
    // <Homepage />
  )
}

export default App;
