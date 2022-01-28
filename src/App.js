import React from "react";
import './App.css';
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./contexts/AuthContexts";

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
import SignUp from "./Pages/SignUp/signup";
import SignIn from "./Components/SignIn/Signin";
import Dashboard from "./Components/Dashboard/Dashboard";
 
/*
    TODO: Sign Up not working. User account is not being created when clicking sign up button.
    Displays "Failed to create an account". Sign In windows shows blank.
*/ 
const App = () => {
  return (
      
          <Router>
            <NavBar />
            <main>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/explore" element={<Explore />} />
                <Route exact path="/premium" element={<Premium />} />
                <Route exact path="/signup" element={
                  <AuthProvider>
                    <SignUp/> 
                  </AuthProvider>
                } />
                <Route exact path="/signin" element={<SignIn/>}/>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </Router>
  );
}

export default App;
