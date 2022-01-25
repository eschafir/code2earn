import React from 'react';
// import { MemoryRouter, Switch, Route } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';

import button from 'react-bootstrap/Button'

import './nft-profile.css';

function Profile(){
    return(
        <header>
            <div class="header">
                <ul class="header-list">
                    <li>Login</li>
                    <li>Sign Up</li>
                    <li>Get Premium</li>
                </ul>
                <button type="button" class="btn btn-success" variant="outline-success">Success</button>  
        
            
            </div>

            <h2>Welcome to your profile!</h2>
        </header>
    )
}


export default Profile