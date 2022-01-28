import React from 'react';
import './Dashboard.css'
import Footer from '../../Components/Footer/Footer';

export default function Dashboard() {
  return(
    <>
    <div class="b-example-divider" style={{paddingTop: 5}}></div>
    <nav class="nav nav-underline" >
        <a class="nav-link active text-black" href="./Dashboard">Dashboard</a>
        <a class="nav-link text-black" href="/Preferences"> Wallet</a>
          </nav>
          <div class="b-example-divider text-white bg-dark" style={{paddingTop: 60}}></div>
          <div class="row align-items-md-stretch"/>
          <div class="col-md-6"/>
          <section class="jumbotron text-center text-white bg-dark">
          <div class="container">
          <h1 class="jumbotron-heading">Album example</h1>
          <p class="lead text-light">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
          <div class="b-example-divider text-white bg-dark" style={{paddingTop: 80}}></div>
          </p>
          </div>
          </section>
      <div class="b-example-divider" style={{paddingTop: 20}}></div>
      <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action list-group-item-success">Difficulty: Easy</a>
      <a href="/Home" class="list-group-item list-group-item-action " > Question One </a>
      <a href="#" class="list-group-item list-group-item-action"> Question Two </a>
      <div class="b-example-divider" style={{paddingTop: 20}}></div>
      <a href="#" class="list-group-item list-group-item-action list-group-item-warning">Difficulty: Medium</a>
      <a href="#" class="list-group-item list-group-item-action"> Question Three </a>
      <div class="b-example-divider" style={{paddingTop: 20}}></div>
      <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Difficulty: Hard</a>
      <a href="#" class="list-group-item list-group-item-action"> Question Four </a>
      <a href="#" class="list-group-item list-group-item-action"> Question Five </a>
      <div class="b-example-divider" style={{paddingTop: 20}}></div>
      </div>
    <Footer></Footer>
  </>
 
  )
}