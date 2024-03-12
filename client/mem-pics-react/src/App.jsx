import { AppBar, Typography, Container, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { styles } from "./styles";
import memories from "./assets/Memories.png";

import { getPosts } from "./actions/posts";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
          <Grid
            container
            justify={"space-between"}
            alignItems={"stretch"}
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
