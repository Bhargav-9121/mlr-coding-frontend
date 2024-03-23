// <<<<<<< main
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { IoMdGift } from "react-icons/io";
import './styles.scss';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function NavBar({username, profilePicture}) {
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const isLoggedIn = Cookies.get("jwtToken") !== undefined;
  
  const logOut = () => {
    Cookies.remove("jwtToken");
    navigate("/", { replace: true });
  };
  
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
                
                {isLoggedIn && (
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

{location.pathname !== "/" && (
              <NavDropdown.Item onClick={logOut} as={Link} to="/">
                  LogOut
                </NavDropdown.Item>
            )}


              </NavDropdown>
            )}
                
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
// =======
// import { Link, useLocation } from "react-router-dom";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// function NavBar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isLoggedIn = Cookies.get("jwtToken") !== undefined;

//   const logOut = () => {
//     Cookies.remove("jwtToken");
//     navigate("/", { replace: true });
//   };

//   return (
//     <>
//       {isLoggedIn && (
//         <Navbar bg="primary" variant="dark">
//           <Container>
//             <Navbar.Brand as={Link} to="/leaderboard">
//               Home
//             </Navbar.Brand>
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to="/leaderboard">
//                 Features
//               </Nav.Link>
//               <Nav.Link as={Link} to="/leaderboard">
//                 Pricing
//               </Nav.Link>
//             </Nav>
//             {location.pathname !== "/" && (
//               <button onClick={logOut}>LogOut</button>
//             )}
//           </Container>
//         </Navbar>
//       )}
// >>>>>>> main
    </>
  );
}

export default NavBar;
