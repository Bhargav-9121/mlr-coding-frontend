import React, { useState, useEffect } from 'react';
import LottieAnimation from '../../components/LottieAnimation';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, MDBCard, MDBCardBody, MDBSpinner } from 'mdb-react-ui-kit';

function LoginPage() {
    const [loading, setLoading] = useState(true); // State variable to track loading status
    const animationSrc = 'https://lottie.host/d01a53d2-5dfb-49be-8dd4-5da9bc887cd2/9qciwN240m.json'; 

    useEffect(() => {
        // Simulate loading delay with setTimeout
        setTimeout(() => {
            setLoading(false); // Set loading to false after a delay
        }, 2000); // 2000 milliseconds (2 seconds) delay
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {loading ? (
                // Render loading spinner while loading is true
                <MDBSpinner grow className="m-5" />
            ) : (
                // Render the page content when loading is false
                <MDBCard style={{ marginTop: '8%', width: '95%', border: 'solid purple 2px' }}>
                    <MDBCardBody style={{ padding: '0' }}>
                        <MDBContainer fluid className=" h-custom">
                            <MDBRow>
                                <MDBCol col='10' md='6' style={{ borderRight: '1px solid black' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingBottom: '10%' }}>
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
                                <MDBCol col='4' md='6' style={{ backgroundColor: '#F5E1FF' }} >
                                    <div style={{ padding: '5%' }}>
                                        <h2 className="fw-bold mb-5 mt-5 text-center">Sign in</h2>
                                        <MDBInput wrapperClass='mb-4 w-70' label='Username' id='formControlLg' type='text' size="lg" style={{ backgroundColor: 'white' }} />
                                        <MDBInput wrapperClass='mb-4 w-70' label='Password' id='formControlLg' type='password' size="lg" style={{ backgroundColor: 'white' }} />
                                        <MDBBtn>Login</MDBBtn>
                                        <hr className="my-4" />
                                        <p className="small mb-3 pb-lg-2"><a class="text-black-50" href="#!">Forgot password?</a></p>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCardBody>
                </MDBCard>
            )}
        </div>
    );
}

export default LoginPage;
