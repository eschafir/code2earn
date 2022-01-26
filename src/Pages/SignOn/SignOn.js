import React from "react";
// import Dashboard from "../Components/Dashboard/Dashboard.js";
// import Preferences from "../Components/Preferences/Preferences.js";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


const SignOn = () => {
    return(
        <div className="container">
            <h1 className="text-center" style={{paddingTop: "30%"}}> Sign On </h1>
            
            <Login/>
        </div>
        
        // <div className="wrapper">
        //      <h1>Application</h1>
        //         <Router>
        //             <Routes>
        //                 <Route exact path="/dashboard" element= {<Dashboard/>}/>
        //                 <Route exact path="/preferences" element = {<Preferences/>}/>
        //             </Routes>
        //         </Router>
        // </div>
    )
}

export default SignOn;