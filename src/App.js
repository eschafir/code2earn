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
import Preferences from "./Pages/Preferences/Preferences";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NavBar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/login";
import Compiler from "./Components/Compiler/Compiler";


function App () {
  return (
    <>
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/premium" element={<Premium />} />
          <Route exact path="/signon" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/preferences" element={<Preferences />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
    <Compiler/>
     </>
  );
}



export default App;
