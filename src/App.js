import React from "react";
import './App.css';

import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import Premium from "./Pages/Premium/Premium";
import NavBar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/signup";
import { AuthProvider } from "./contexts/AuthContexts";
 
const App = () => {
  return (

    <AuthProvider>
      <Container>
          <Router>
            <NavBar />
            <main>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/explore" element={<Explore />} />
                <Route exact path="/premium" element={<Premium />} />
                <Route exact path="/signon" element={<SignUp />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </Router>
      </Container>
    </AuthProvider>
  );
}

export default App;
