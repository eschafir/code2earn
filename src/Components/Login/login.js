import React from 'react'
import './login.css'


export default function Login(){
    return(
        <div class="login-wrapper">
            <h1>Please login</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type={"password"}/>
                </label>
                <div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}