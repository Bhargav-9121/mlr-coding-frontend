import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/leaderboard">
              Home
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/leaderboard">
                Features
              </Nav.Link>
              <Nav.Link as={Link} to="/leaderboard">
                Pricing
              </Nav.Link>
            </Nav>
            {location.pathname !== "/" && (
              <button onClick={logOut}>LogOut</button>
            )}
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default NavBar;
