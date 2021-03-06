import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
                <Container>
                    <Navbar.Brand>Text to Handwriting</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                        </Nav>
                        <a href="https://github.com/tanmaythole/text-to-handwriting" target="_blank" rel="noreferrer">
                            <img src="/assets/images/github.png" alt="github" />
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
