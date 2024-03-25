import { AppBar, Typography, Toolbar, Avatar, Button } from "@mui/material";
import { styles } from "./styles";
import memories from "../../assets/Memories.png";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");

    setUser(null);
  };

  return (
    <AppBar sx={styles.appBar} position="static" color="inherit">
      <div style={styles.brandContainer}>
        <Typography component={Link} to="/" variant="h3" sx={styles.heading}>
          MemPics
        </Typography>
        <img src={memories} alt="memories" height={60} style={styles.image} />
      </div>

      <Toolbar sx={styles.toolbar}>
        {user ? (
          <div style={styles.profile}>
            <Avatar
              sx={styles.purple}
              alt={user.userInfo.name}
              src={user.userInfo.picture}
            >
              {user.userInfo.name.charAt(0)}
            </Avatar>

            <Typography sx={styles.userName} variant="h6">
              {user.userInfo.name}
            </Typography>

            <Button
              variant="contained"
              sx={styles.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
