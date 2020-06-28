import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href={process.env.PUBLIC_URL + "/home"}>Home</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + "/upload"}>Télécharger une photo</Nav.Link>
                        <NavDropdown title="Recherche par" id="basic-nav-dropdown">
                            <NavDropdown.Item href={process.env.PUBLIC_URL + "/search/year"}>Années</NavDropdown.Item>
                            <NavDropdown.Item href={process.env.PUBLIC_URL + "/search/place"}>Lieux</NavDropdown.Item>
                            <NavDropdown.Item href={process.env.PUBLIC_URL + "/search/person"}>Personne</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href={process.env.PUBLIC_URL + "/event"}>Les événements</Nav.Link>
                        <Nav.Link href={process.env.PUBLIC_URL + "/document"}>Les documents</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
