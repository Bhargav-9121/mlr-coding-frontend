// import { useEffect, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { useState } from "react";

// const Forgot = () => {
//   const navigate = useNavigate();

//   const [emailId, changeEmailId] = useState("")

//   useEffect(() => {
//     const jwtToken = Cookies.get("jwtToken");
//     if (jwtToken !== undefined) {
//       navigate("/profile", { replace: true });
//     }
//   });

//   const sendOTP = () => {
//     const otp=1234;

//   }

//   return (
//     <form onSubmit={sendOTP}>
//       <h1>Forgot Password</h1>
//       <input type="email" onChange={(e)} placeholder="Enter your email" />
//       <button type="submit">Send OTP</button>
//     </form>
//   );
// };

// export default Forgot;
