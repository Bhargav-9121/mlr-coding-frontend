// import { useEffect, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { useState } from "react";

// const Forgot = () => {
//   const navigate = useNavigate();

//   const [emailId, changeEmailId] = useState("");

//   useEffect(() => {
//     const jwtToken = Cookies.get("jwtToken");
//     if (jwtToken !== undefined) {
//       navigate("/profile", { replace: true });
//     }
//   });

//   const sendOTP = async (event) => {
//     event.preventDefault();

//     const email = { emailId };
//     const options = {
//       method: "POST",
//       body: JSON.stringify(email),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     try {
//       const res = await fetch(
//         "https://dbops.onrender.com/send_user_credentials",
//         options
//       );

//       if (!res.ok) {
//         throw new Error("Error");
//       }

//       const data = await res.json();
//       //   submitSuccess(data.jwtToken);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form onSubmit={sendOTP}>
//       <h1>Forgot Password</h1>
//       <input
//         type="email"
//         onChange={(e) => changeEmailId(e.target.value)}
//         placeholder="Enter your email"
//       />
//       <button type="submit">Send OTP</button>
//     </form>
//   );
// };

// export default Forgot;
