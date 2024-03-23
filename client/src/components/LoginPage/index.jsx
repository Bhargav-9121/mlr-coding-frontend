import React from 'react';
import LottieAnimation from '../../components/LottieAnimation'; // Import the component
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

function App() {
    const animationSrc = 'https://lottie.host/d01a53d2-5dfb-49be-8dd4-5da9bc887cd2/9qciwN240m.json'; 
  return (

    //animation div
    <div style={{paddingTop: '10vh'}}>
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
        <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
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
        <MDBCol col='4' md='6'>


        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-4 text-center">Sign in</h2>

              <MDBInput wrapperClass='mb-4 w-100' label='Username' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>


              <MDBBtn size='lg'>
                Login
              </MDBBtn>

              <hr className="my-4" />

              <p className="small mb-3 pb-lg-2"><a class="text-black-50" href="#!">Forgot password?</a></p>
             

            </MDBCardBody>
          </MDBCard>


        </MDBCol>

      </MDBRow>

      

    </MDBContainer>
    </div>
  );
}

export default App;