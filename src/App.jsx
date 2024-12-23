import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
   const [role, setRole] = useState('user')
  return (
    <Router>
      <Navbar role={role}/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
     
  );
}

export default App;
