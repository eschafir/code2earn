import React from 'react';
import "./Navbar.css"
import {Navbar,Nav,Container} from 'react-bootstrap'


function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='navigation-bar'>
                <Container>
                    <Navbar.Brand href="#home">CODE2EARN</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Premium">Premium</Nav.Link>
                        <Nav.Link href="/Explore">Explore</Nav.Link>
                        <Nav.Link href="/Signon">Sign in</Nav.Link>
                        {/* <Nav.Link href="/Signon"><button class="btn btn-primary navbar-btn">Sign in</button> */}

                    </Nav>
 
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar