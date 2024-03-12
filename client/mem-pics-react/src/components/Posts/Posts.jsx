import Post from "./Post/Post";
// import styles from "./styles";
import memories from "../../assets/Memories.png";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts, "posts");

  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
