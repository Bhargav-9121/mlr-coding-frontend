// <<<<<<< main
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { IoMdGift } from "react-icons/io";
import "./styles.scss";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

// function NavBar({ username, profilePicture }) {
function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = Cookies.get("jwtToken") !== undefined;

  const logOut = () => {
    Cookies.remove("jwtToken");
    navigate("/", { replace: true });
  };

  return (
    <>
      {isLoggedIn && (
        <Navbar className="bg-purple" variant="dark" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand as={Link} to="">
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="ms-auto me-auto"
                style={{ gap: "5vw", fontSize: "1.1rem" }}
              >
                <Nav.Link as={Link} to="/leaderboard" className="text-white">
                  <div>
                    <MdLeaderboard />
                    <br />
                    <div>Leaderboard</div>
                  </div>
                </Nav.Link>
                <Nav.Link as={Link} to="" className="text-white">
                  <div>
                    <IoBookOutline />
                    <br />
                    <div>Courses</div>
                  </div>
                </Nav.Link>
                <Nav.Link as={Link} to="" className="text-white">
                  <div>
                    <MdWork />
                    <br />
                    <div>Jobs</div>
                  </div>
                </Nav.Link>
                <Nav.Link as={Link} to="" className="text-white">
                  <div>
                    <IoMdGift />
                    <br />
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
                    <Image
                      // src={profilePicture}
                      roundedCircle
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/profile">
                    Action
                  </NavDropdown.Item>

                  {location.pathname !== "/" && (
                    <NavDropdown.Item as={Link} to="/" onClick={logOut}>
                      LogOut
                    </NavDropdown.Item>
                  )}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default NavBar;
