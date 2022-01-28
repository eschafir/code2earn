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
import Premium from "./Pages/Premium/Premium";
import NavBar from "./Components/Navbar/Navbar";
import SignUp from "./Pages/SignUp/signup";
import SignIn from "./Pages/SignIn/Signin";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Preferences from "./Pages/Preferences/Preferences";
import Question1 from "./Pages/Questions/QuestionOne"
import Question2 from "./Pages/Questions/QuestionTwo";
import Question3 from "./Pages/Questions/QuestionThree";
import Question4 from "./Pages/Questions/QuestionFour";
import Question5 from "./Pages/Questions/QuestionFive";
 
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
                <Route exact path="/premium" element={<Premium />} />
                <Route exact path="/preferences" element={<Preferences />} />
                <Route exact path="/questionOne" element={<Question1 />} />
                <Route exact path="/questionTwo" element={<Question2 />} />
                <Route exact path="/questionThree" element={<Question3 />} />
                <Route exact path="/questionFour" element={<Question4 />} />
                <Route exact path="/questionFive" element={<Question5 />} />
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
