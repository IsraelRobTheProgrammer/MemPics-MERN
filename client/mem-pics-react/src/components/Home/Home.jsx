import { Container, Grow, Grid } from "@mui/material";

// import Posts from "../../components/Posts/Posts";
// import Form from "./components/Form/Form";

import { styles } from "./styles";
import { getPosts } from "../../actions/posts";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
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
  );
};
export default Home;
