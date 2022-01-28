import React from "react";
import { Component } from "react";
import './Pricing.css';

class Pricing extends Component {
    render() {
        return(
            <body>

<div class="container py-3">
  <header>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Pricing</h1>
      <h2 class="fs-5 text-muted">Quickly build an effective progression in your coding skills to maximize your revenue and chances to nail those job interviews.
        Our program is built to help you earn while learning!</h2>
    </div>
  </header>

  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Basic</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$10<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>5 Questions per day</li>
              <li>Monthly Shmecklebox</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg bg-dark text-light">Purchase</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>15 Questions per day</li>
              <li>Weekly Shmecklebox</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg bg-dark text-light">Purchase</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-dark">
          <div class="card-header py-3 text-white bg-dark border-light">
            <h4 class="my-0 fw-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 Questions per day</li>
              <li>Daily Shmecklebox</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg bg-dark text-light">Purchase</button>
          </div>
        </div>
      </div>
    </div>
    </main>
    </div>
    <div class="b-example-divider"></div>
        </body>
        );
    }
}

export default Pricing