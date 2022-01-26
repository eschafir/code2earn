import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  Switch
} from 'react-router-dom'


import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import Premium from "./Pages/Premium/Premium";
import SignOn from "./Pages/SignOn/SignOn";
import NavBar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/login";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/premium" element={<Premium />} />
          <Route exact path="/signon" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
