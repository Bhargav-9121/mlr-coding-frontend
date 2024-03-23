import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { IoMdGift } from "react-icons/io";
import './styles.scss';

function NavBar({username, profilePicture}) {
  return (
    <>
      <Navbar className="bg-purple" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/leaderboard">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-auto" style={{ gap: '5vw', fontSize: '1.1rem'  }}>
              <Nav.Link as={Link} to="/leaderboard" className="text-white">
                <div align = 'center'>
                  <MdLeaderboard/>
                  <br/>
                  <div>Leaderboard</div>
                  
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/leaderboard" className="text-white">
              <div align = 'center'>
                  <IoBookOutline/>
                  <br/>
                  <div>Courses</div>
                  
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/leaderboard" className="text-white">
              <div align = 'center'>
                  <MdWork/>
                  <br/>
                  <div>Jobs</div>
                  
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/leaderboard" className="text-white">
              <div align = 'center'>
                  <IoMdGift/>
                  <br/>
                  <div>XP</div>
                  
                </div>
              </Nav.Link>
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
