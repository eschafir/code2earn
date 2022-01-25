import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom'

import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import Premium from "./Pages/Premium/Premium";
import SignOn from "./Pages/SignOn/SignOn";
import NavBar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/premium" element={<Premium />} />
          <Route exact path="/signon" element={<SignOn />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
