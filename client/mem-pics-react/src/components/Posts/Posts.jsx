import Post from "./Post/Post";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts, "posts");

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      sx={styles.mainContainer}
      container
      alignItems={"stretch"}
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post}></Post>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
