import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import "./index.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notValid, changeNotValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");
    if (jwtToken !== undefined) {
      navigate("/profile", { replace: true });
    }
  }, [navigate]);

  const loginFormSubmit = async (event) => {
    event.preventDefault();

    const userDetails = { username, password };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await fetch("https://dbops.onrender.com/hashlogin", options);

      if (!res.ok) {
        changeNotValid(true);
        throw new Error("Failed to login");
      }

      const data = await res.json();
      submitSuccess(data.jwtToken);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const submitSuccess = (jwtToken) => {
    Cookies.set("jwtToken", jwtToken, {
      expires: 30,
      path: "/",
    });
    navigate("/profile", { replace: true });
    changeNotValid(false); // Reset notValid state on successful login
  };

  return (
    <>
      <h1 className="mainLogo">Logo</h1>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <div className="performerDiv">
              <h3>Top Performer of the Week</h3>
              <h5>abcd</h5>
              <br />
              <br />
              <br />
              <h3>Top Performer of the Month</h3>
              <h5>abcd</h5>
            </div>
          </MDBCol>
          <MDBCol col="3" md="4">
            <h1>Login Form</h1>
            <form onSubmit={loginFormSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Username"
                id="formControlLg"
                type="text"
                size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Link to="/forgot">Forgot Password</Link>

              {notValid && <p>Wrong Credentials</p>}

              <div className="text-center text-md-start mt-4 pt-2">
                <MDBBtn type="submit" className="mb-0 px-5" size="lg">
                  Login
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default App;
