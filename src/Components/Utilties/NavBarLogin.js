import React from 'react'
import { Navbar, Container, FormControl, Nav } from 'react-bootstrap'
import logo from '../../Images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBarLogin = () => {
    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        placeholder="search..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        <Nav.Link href='/login'
                            className="nav-text d-flex mt-3 justify-content-center">
                            <img src="" className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>Login</p>
                        </Nav.Link>
                        <Nav.Link href='/cart'
                            className="nav-text d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>
                            <img src="" className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>Cart</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLogin