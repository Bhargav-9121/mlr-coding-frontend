import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import './styles.scss';

function NavBar({username, profilePicture}) {
  return (
    <>
      <Navbar className="bg-purple" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/leaderboard">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link as={Link} to="/leaderboard" className="text-white">Leaderboard</Nav.Link>
              <Nav.Link as={Link} to="/leaderboard" className="text-white">XP & Rewards</Nav.Link>
              <Nav.Link as={Link} to="/leaderboard" className="text-white">Jobs</Nav.Link>
              <Nav.Link as={Link} to="/leaderboard" className="text-white">Courses</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={<FaUser />}
                menuVariant="light"
                align="end"
              >
                <NavDropdown.Item as={Link} to="/profile">
                  <Image src={profilePicture} roundedCircle style={{ width: "30px", height: "30px", marginRight: "10px" }} />
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">
                  Action
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
