import React from 'react';
import "./Navbar.css"
import {Navbar,Nav, NavDropdown, Container} from 'react-bootstrap'


function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='navigation-bar'>
                <Container>
                    <Navbar.Brand href="/Home">CODE2EARN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example"></Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Premium">Premium</Nav.Link>
                        {/* <Nav.Link href="/Signon"><button class="btn btn-primary navbar-btn">Sign in</button> */}
                        <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Account"
                        menuVariant="dark"
                        >
                        <NavDropdown.Item href="/Dashboard">Dashboard</NavDropdown.Item>
                        <NavDropdown.Item href="/Preferences">Wallet</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/signin">Login</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
 
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar