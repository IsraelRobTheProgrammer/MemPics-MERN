import { AppBar, Typography, Container, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { useTheme } from "@mui/system";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { styles } from "./styles";
import memories from "./assets/Memories.png";

import { getPosts } from "./actions/posts";
import { useState, useEffect } from "react";

export default function App() {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <AppBar sx={styles.appBar} position="static" color="inherit">
        <Typography variant="h3" sx={styles.heading}>
          MemPics
        </Typography>
        <img src={memories} alt="memories" height={60} style={styles.image} />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container sx={styles.mainContainer} spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
