import React from "react";
import {GoogleLogin} from 'react-google-login'
import Login from "../../Components/Login";

const SignOn = () => {
    return(
        <div className="container">
            <h1 className="text-center" style={{paddingTop: "30%"}}> Sign On </h1>
            
            <Login/>
        </div>
    )
}

export default SignOn;