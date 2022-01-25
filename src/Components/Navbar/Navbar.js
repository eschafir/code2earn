import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'


function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">CODE2EARN</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Premium">Premium</Nav.Link>
                        <Nav.Link href="/Explore">Explore</Nav.Link>
                        <Nav.Link href="/Signon">Sign in</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar