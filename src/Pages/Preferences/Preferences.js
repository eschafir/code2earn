import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";

export default function Preferences() {
    return (
      <>
       <div class="b-example-divider" style={{paddingTop: 5}}></div>
        <nav class="nav nav-underline" >
        <a class="nav-link active text-black" href="./Dashboard">Dashboard</a>
        <a class="nav-link text-black" href="/Preferences"> Wallet</a>
        </nav>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Your Wallet</h1>
        <p class="lead font-weight-normal">You have a total of 75 Coins 🪙.</p>
        <a class="btn btn-outline-secondary" href="/Dashboard">Earn More</a>
        </div>
        <div class="product-device box-shadow d-none d-md-block"></div>
        <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>
        <div class="b-example-divider" style={{paddingTop: 5}}></div>
      <Container fluid="md">
      <Row >
        <Col xs>
      <Card className="text-center" style={{width: '18rem'}}>
      <Card.Body>
      <Card.Img orientation="top" src="https://us.123rf.com/450wm/rogistok/rogistok1711/rogistok171100149/90614343-pop-art-businessman-talking-on-the-phone-comic-book-cartoon-retro-illustrator-vector-drawing.jpg?ver=6"/>
      <div class="b-example-divider" style={{paddingTop: 5}}></div>
      <Card.Title>Markarth NFT</Card.Title>
      <Card.Text>You're finally awake.</Card.Text>
      <Button href="#">🪙100</Button>
      </Card.Body>
      </Card>
      </Col>
      <Col xs>
      <Card className="text-center" style={{width: '18rem'}}>
      <Card.Body>
      <Card.Img orientation="top" src="https://us.123rf.com/450wm/studiostoks/studiostoks1605/studiostoks160500137/56425757-gift-girl-happy-wedding-birthday-pop-art-retro-style-the-emotion-reaction-of-joy-red-gift-box.jpg?ver=6"/>
      <div class="b-example-divider" style={{paddingTop: 5}}></div>
      <Card.Title>Riften NFT</Card.Title>
      <Card.Text>You're finally awake.</Card.Text>
      <Button href="#">🪙175</Button>
      </Card.Body>
      </Card>
      </Col>
      <Col xs>
      <Card className="text-center" style={{width: '18rem'}}>
      <Card.Body>
      <Card.Img orientation="top" src="https://us.123rf.com/450wm/studiostoks/studiostoks1801/studiostoks180100011/93264493-pop-art-beautiful-woman-in-sunglasses.jpg?ver=6"/>
      <div class="b-example-divider" style={{paddingTop: 5}}></div>
      <Card.Title>Imperials NFT</Card.Title>
      <Card.Text>You're finally awake.</Card.Text>
      <Button href="#">🪙274</Button>
      </Card.Body>
      </Card>
      </Col>
      </Row>
      <div class="b-example-divider" style={{paddingTop: 20}}></div>
      <Row >
        <Col xs>
      <Card className="text-center" style={{width: '18rem'}}>
      <Card.Body>
      <Card.Img orientation="top" src="https://us.123rf.com/450wm/studiostoks/studiostoks1711/studiostoks171100192/90924247-boze-vrouw-donder-en-bliksem-pop-art-retro-vectorillustratie.jpg?ver=6"/>
      <div class="b-example-divider" style={{paddingTop: 5}}></div>
      <Card.Title>Talos NFT</Card.Title>
      <Card.Text>You're finally awake.</Card.Text>
      <Button href="#">🪙233</Button>
      </Card.Body>
      </Card>
      </Col>
      <Col xs>
      <Card className="text-center" style={{width: '18rem'}}>
      <Card.Body>
      <Card.Img orientation="top" src="https://us.123rf.com/450wm/studiostoks/studiostoks1805/studiostoks180500006/100757617-woman-announcing-discount-lady-shouts-protests-pop-art-retro-vector-illustration-comic-cartoon-kitsc.jpg?ver=6"/>
      <div class="b-example-divider" style={{paddingTop: 5}}></div>
      <Card.Title>Whiterun NFT</Card.Title>
      <Card.Text>You're finally awake.</Card.Text>
      <Button href="#">🪙134</Button>
      </Card.Body>
      </Card>
      </Col>
      <Col xs>
      <Card className="text-center" style={{width: '18rem'}}>
      <Card.Body>
      <Card.Img orientation="top" src="https://us.123rf.com/450wm/studiostoks/studiostoks1604/studiostoks160400284/55726608-herramientas-vieron-martillo-rodillo-de-estilo-retro-pop-art-pintura-taladro-herramientas-para-la-re.jpg?ver=6"/>
      <div class="b-example-divider" style={{paddingTop: 5}}></div>
      <Card.Title>Solitude NFT</Card.Title>
      <Card.Text>You're finally awake.</Card.Text>
      <Button href="#">🪙72</Button>
      </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
      <Footer/>
      </>
    );
  };