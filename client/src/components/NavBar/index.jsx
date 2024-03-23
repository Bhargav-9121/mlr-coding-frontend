import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

function NavBar({username}) {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/leaderboard">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/leaderboard">Features</Nav.Link>
            <Nav.Link as={Link} to="/leaderboard">Pricing</Nav.Link>
          </Nav>
          <NavDropdown
              id="nav-dropdown-dark-example"
              title={username}
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/profile">
                Action
              </NavDropdown.Item>
            </NavDropdown>


        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
