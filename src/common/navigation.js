import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Upload } from "../upload/upload";
import { Home } from "../home/home";
import { Search } from "../search/search";

export default function Navigation() {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/upload">Télécharger une photo</Nav.Link>
                        <NavDropdown title="Recherche par" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/search/year">Années</NavDropdown.Item>
                            <NavDropdown.Item href="/search/place">Lieux</NavDropdown.Item>
                            <NavDropdown.Item href="/search/person">Personne</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/events">Les événements</Nav.Link>
                        <Nav.Link href="/docs">Les documents</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Chercher" className="mr-sm-2" />
                        <Button variant="outline-success">Chercher</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/upload">
                    <Upload />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
            </Switch>
        </Router>
    );
}
