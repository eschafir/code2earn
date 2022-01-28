import React from "react";
import { Component } from "react";
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
<>

        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">Punny headline</h1>
        <p class="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
        <a class="btn btn-outline-secondary" href="#">Coming soon</a>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div class="b-example-divider"></div>
            <div class="p-5 mb-4 bg-dark text-white rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Our Mission</h1>
              <p class="col-md-8 fs-4">Code2Earn is a subscription based platform where members are awarded for their progression in coding. 
              The program presents the user with a series of coding challenges ranging in difficulty. Upon successful completion of said challenges, 
              the user is awarded with points that can be saved toward purchasing NFT's.</p>
              <button class="btn btn-lg bg-light text-dark btn-outline-white" type="button">Learn More</button>
            </div>
            </div>
            <div class="b-example-divider"></div>
                <div class="row align-items-md-stretch">
                <div class="col-md-6">
                <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>Add borders</h2>
                    <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                    <button class="btn btn-outline-secondary" type="button">Example button</button>
                    </div>
                    </div>
               
                    <div class="col-md-6">
                    <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>Add borders</h2>
                    <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                    <button class="btn btn-outline-secondary" type="button">Example button</button>
                    </div>
                    </div>
                    </div>
</>
        );
    }
}

export default Jumbotron