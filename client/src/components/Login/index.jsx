import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

// const Login = () => {
// const [username, changeUsername] = useState("");
// const [password, changePassword] = useState("");
// const navigate = useNavigate();

// useEffect(() => {
//   const jwtToken = Cookies.get("jwt_token");
//   if (jwtToken !== undefined) {
//     navigate("/profile", { replace: true });
//   }
// });

//   const loginFormSubmit = async (event) => {
//     event.preventDefault();

//     const userDetails = { username, password };
//     const options = {
//       method: "POST",
//       body: JSON.stringify(userDetails),
//     };
//     const res = await fetch("login url", options);
//     const data = await res.json();

//     if (res.ok === true) {
//       submitSuccess(data.jwt_token);
//     }
//   };

//   const submitSuccess = (jwtToken) => {
//     Cookies.set("jwt_token", jwtToken, {
//       expires: 30,
//       path: "/",
//     });
//     navigate("/profile", { replace: true });
//   };

//   //   const forgotRoute = () => {
//   //     navigate("/forgot-route");
//   //   };

//   return (
//     <div>
//       <form onSubmit={loginFormSubmit}>
//         <h1>Login Form</h1>
//         <input
//           type="text"
//           placeholder="username"
//           value={username}
//           onChange={(e) => changeUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           value={password}
//           onChange={(e) => changePassword(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {/* <button onClick={forgotRoute}>Forgot Password</button> */}
//     </div>
//   );
// };

// export default Login;

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const defaultTheme = createTheme();

export default function Login() {
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={loginFormSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={(e) => changeUsername(e.target.value)}
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => changePassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
