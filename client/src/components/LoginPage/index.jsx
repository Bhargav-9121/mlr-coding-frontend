import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import LottieAnimation from "../../components/LottieAnimation";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "./index.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notValid, changeNotValid] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");
    if (jwtToken !== undefined) {
      navigate("/profile", { replace: true });
    }
  }, [navigate]);

  const loginFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading

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
        setLoading(false); // Stop loading
        throw new Error("Failed to login");
      }

      const data = await res.json();
      submitSuccess(data.jwtToken);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false); // Stop loading in case of error
    }
  };

  const submitSuccess = (jwtToken) => {
    Cookies.set("jwtToken", jwtToken, {
      expires: 30,
      path: "/",
    });
    changeNotValid(false);
    navigate("/profile", { replace: true });
  };

  const animationSrc =
    "https://lottie.host/d01a53d2-5dfb-49be-8dd4-5da9bc887cd2/9qciwN240m.json";

  return (
    <>
      <nav className="loginNav">
        <h1>Logo</h1>
      </nav>

      <div>
        <MDBContainer fluid className="p-3 my-5 h-custom">
          <MDBRow>
            <MDBCol col="10" md="6">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LottieAnimation
                  src={animationSrc}
                  loop={true}
                  width={500}
                  height={500}
                  autoplay={true}
                />
              </div>
            </MDBCol>

            <MDBCol col="4" md="6">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-4 text-center">Sign in</h2>
                  <form onSubmit={loginFormSubmit}>
                    <MDBInput
                      wrapperClass="mb-4 w-100"
                      label="Username"
                      id="formControlLg"
                      type="text"
                      size="lg"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <MDBInput
                      wrapperClass="mb-4 w-100"
                      label="Password"
                      id="formControlLg"
                      type="password"
                      size="lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    {notValid && <p>Wrong Credentials</p>}

                    <MDBBtn type="submit" size="lg" disabled={loading}>
                      {loading ? "Logging in..." : "Login"}
                    </MDBBtn>

                    <hr className="my-4" />

                    <p className="small mb-3 pb-lg-2">
                      <a className="text-black-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default LoginPage;
