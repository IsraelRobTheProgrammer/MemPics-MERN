export default (posts = [], action) => {
  switch (action.type) {
    case "CREATE":
      return action.payload;

    case "FETCH_ALL":
      console.log("in fetch all");
      return action.payload;

    default:
      console.log("in default");
      return posts;
  }
};
