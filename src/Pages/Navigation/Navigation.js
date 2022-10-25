import React from 'react';
import { useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [dark, setDark] = useState(false)
    const handleToggle = (e) => {
        setDark(e.target.checked);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <Image src='https://i.ibb.co/QHKZFzQ/image.png' />{' '}
                    Tutorio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    {/* navigation menus */}
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                        <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

                    </Nav>

                    {/* user and authencation part */}
                    <Nav>
                        <Nav.Link >usename</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Button variant="dark">Logout</Button>

                        {/* toggle dark/light mode  */}
                        <div>
                            <input type="checkbox" onClick={handleToggle} className="btn-check" id="btn-check-outlined" autocomplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">{!dark ? 'Dark' : 'Light'}</label>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;