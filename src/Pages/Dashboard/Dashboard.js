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
          <h1 class="jumbotron-heading">Welcome</h1>
          <p class="lead text-light">Here you will be able to solve coding questions and eaçrn Coins for each question that is completed successfully. Note that harder questions pay more than easier ones. Happy coding!</p>
          <p>
          <div class="b-example-divider text-white bg-dark" style={{paddingTop: 80}}></div>
          </p>
          </div>
          </section>
      <div class="b-example-divider" style={{paddingTop: 20}}></div>
      <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action list-group-item-success">Difficulty: Easy (🪙5 Each Question)</a>
      <a href="/QuestionOne" class="list-group-item list-group-item-action " > Question One </a>
      <a href="/QuestionTwo" class="list-group-item list-group-item-action"> Question Two </a>
      <div class="b-example-divider" style={{paddingTop: 20}}></div>
      <a href="#" class="list-group-item list-group-item-action list-group-item-warning">Difficulty: Medium (🪙10 Each Question)</a>
      <a href="/QuestionThree" class="list-group-item list-group-item-action"> Question Three </a>
      <div class="b-example-divider" style={{paddingTop: 20}}></div>
      <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Difficulty: Hard (🪙25 Each Question)</a>
      <a href="/QuestionFour" class="list-group-item list-group-item-action"> Question Four </a>
      <a href="/QuestionFive" class="list-group-item list-group-item-action"> Question Five </a>
      <div class="b-example-divider" style={{paddingTop: 20}}></div>
      </div>
    <Footer></Footer>
  </>
 
  )
}