import { useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Paper,
  Avatar,
  Button,
  TextField,
} from "@mui/material";

import { GoogleLogin } from "@react-oauth/google";

import LockOutLinedIcon from "@mui/icons-material/LockOpenOutlined";

import { styles } from "./styles";
import Input from "./Input";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [authMode, setAuthMode] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {};

  const handleChange = () => {};

  const googleSuccess = async (res) => {
    const token = res.credential;
    const userInfo = jwtDecode(token);

    try {
      dispatch({ type: "AUTH", data: { userInfo, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (err) => {
    console.log(err);
  };

  const switchMode = () => setAuthMode((prevState) => !prevState);

  const handleShowPassword = () => setShowPassword((prevState) => !prevState);

  return (
    <Container component={"main"} maxWidth="xs">
      <Paper sx={styles.paper} elevation={3}>
        <Avatar sx={styles.avatar}>
          <LockOutLinedIcon />
        </Avatar>

        <Typography varieant="h5">
          {authMode ? "Sign Up" : "Sign In"}
        </Typography>

        <form style={styles.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {authMode && (
              <>
                <Input
                  name="FirstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />

                <Input
                  name="LastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}

            <Input
              name={"email"}
              label={"Email Address"}
              handleChange={handleChange}
              type={"email"}
            />

            <Input
              name={"password"}
              label={"Password"}
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            {authMode && (
              <Input
                name={"confirmPassword"}
                label={"Repeat Password"}
                handleChange={handleChange}
                type={"password"}
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            {authMode ? "Sign Up" : "Sign In"}
          </Button>

          <div style={styles.googleButton}>
            <GoogleLogin onSuccess={googleSuccess} onError={googleError} />
          </div>

          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <Button onClick={switchMode}>
                {authMode
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
export default Auth;
