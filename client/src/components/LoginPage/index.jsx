import LottieAnimation from "../../components/LottieAnimation"; // Import the component
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

function LoginPage() {
  const animationSrc =
    "https://lottie.host/d01a53d2-5dfb-49be-8dd4-5da9bc887cd2/9qciwN240m.json";
  return (
    //animation div
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MDBCard style={{ marginTop: "8%", width: "95%" }}>
        <MDBCardBody style={{ padding: "0" }}>
          <MDBContainer fluid className=" h-custom">
            <MDBRow>
              <MDBCol
                col="10"
                md="6"
                style={{ borderRight: "1px solid black" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    paddingBottom: "10%",
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

              {/* login card */}
              <MDBCol col="4" md="6" style={{ backgroundColor: "#F5E1FF" }}>
                <div style={{ padding: "5%" }}>
                  <h2 className="fw-bold mb-5 mt-5 text-center">Sign in</h2>

                  <MDBInput
                    wrapperClass="mb-4 w-70"
                    label="Username"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    style={{ backgroundColor: "white" }}
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-70"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    style={{ backgroundColor: "white" }}
                  />

                  <MDBBtn>Login</MDBBtn>

                  <hr className="my-4" />

                  <p className="small mb-3 pb-lg-2">
                    <a className="text-black-50" href="#!">
                      Forgot password?
                    </a>
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default LoginPage;
