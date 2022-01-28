import React from "react";
import './App.css';
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
import SignIn from "./Pages/SignIn/Signin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Preferences from "./Pages/Preferences/Preferences";
 
/*
    TODO: Sign In page needs to let user that credentials are correct. Dashboard needs to be directed by Sign In page after
    users credentials were entered
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
                <Route exact path="/preferences" element={<Preferences />} />
                <Route exact path="/signup" element={
                  <AuthProvider>
                    <SignUp/> 
                  </AuthProvider>
                } />
                <Route exact path="/signin" element={
                <AuthProvider>
                  <SignIn/>
                </AuthProvider>
                }/>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </Router>
  );
}

export default App;
