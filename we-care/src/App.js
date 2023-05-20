import "./Styles/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage'
import LoginMem from "./Pages/LoginMem";
import Signup from "./Pages/Signup";
import LoginEmp from './Pages/LoginEmp';
// import RequireAuth from "./middleware/RequireAuth";
// import RedirectIfAuthenticated from "./middleware/RedirectIfAuthenticated";



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/employee-login" element={<LoginEmp/>}/>
      <Route path="/Loginmem" element={<LoginMem/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
