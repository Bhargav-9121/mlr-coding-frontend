import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      navigate("/profile", { replace: true });
    }
  });

  const loginFormSubmit = async (event) => {
    event.preventDefault();

    const userDetails = { username, password };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const res = await fetch("login url", options);
    const data = await res.json();

    if (res.ok === true) {
      submitSuccess(data.jwt_token);
    }
  };

  const submitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });
    navigate("/profile", { replace: true });
  };

  //   const forgotRoute = () => {
  //     navigate("/forgot-route");
  //   };

  return (
    <div>
      <form onSubmit={loginFormSubmit}>
        <h1>Login Form</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => changeUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => changePassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {/* <button onClick={forgotRoute}>Forgot Password</button> */}
    </div>
  );
};

export default Login;
