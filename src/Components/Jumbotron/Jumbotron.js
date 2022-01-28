import React from "react";
import { Component } from "react";
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
<>

        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">CODE</h1>   
        <p class="lead fw-normal">Starts here.</p>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div class="b-example-divider"></div>
            <div class="p-5 mb-4 bg-dark text-white rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">EARN</h1>
              <p class="col-md-8 fs-4"> Here at Code2Earn, it is our goal to ensure everybody gets paid. We believe in a true reward for learning. After all you work hard, why isn't that enough?</p>
              <button class="btn btn-lg bg-light text-dark btn-outline-white" type="button">Our Mission</button>
            </div>
            </div>
            <div class="b-example-divider"></div>
                <div class="row align-items-md-stretch">
                <div class="col-md-6">
                <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>How does it work?</h2>
                    <p>After creating an account and choosing a plan, you'll be directed to a dashboard full of coding questions. Every question you successfully complete will reward you with Code2Earn Coins. The goal is to save these coins to purchase portions or complete NFTs, while being in complete control of how you would like to handle your assests.</p>
                    <button class="btn btn-outline-secondary" type="button">Earn More</button>
                    </div>
                    </div>
               
                    <div class="col-md-6">
                    <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>What is an NFT?</h2>
                    <p>NFT (Non-Fungible tokens) is a form of digital ledger. Usual NFTs are associated with digital files like photos, videos and audio. NFTs are not the same as cryptocurrency like Bitcoin since each token is a unique identity. More information can be found here.</p>
                    <button class="btn btn-outline-secondary" type="button">Learn More</button>
                    </div>
                    </div>
                    </div>
</>
        );
    }
}

export default Jumbotron