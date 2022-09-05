import React from "react";
import './styles.css';
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import WebLogo from '../../assets/binar-car.logo.png'

function Navibar() {
    return (
        <div className='navibar--cont'>
            <Navbar key="md" expand="md">
                <Container fluid>
                <Link to="/" className="brand-logo">
                    <img src = {WebLogo} />
                </Link>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-md"
                    aria-labelledby="offcanvasNavbar-expand-md"
                    placement="end"
                    style={{ width: "50%" }}
                >
                    <Offcanvas.Header closeButton>
                    <Link to="/" className="offset-brand-logo">
                        <Navbar.Brand href="#" />
                    </Link>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <p className="nav-link">
                            <Nav.Link href="#services">Our Services</Nav.Link>
                        </p>
                        <p className="nav-link">
                            <Nav.Link href="#whyus">Why Us</Nav.Link>
                        </p>
                        <p className="nav-link">
                            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                        </p>
                        <p className="nav-link">
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                        </p>
                    </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navibar