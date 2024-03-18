import { createTheme } from "@mui/material/styles";

export const styles = {
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    color: "rgba(0,183,255,1)",
  },

  image: {
    marginLeft: "15px",
  },

  mainContainer: {
    justifyContent: "space-between",
    alignItems: "stretch",
    [createTheme().breakpoints.down("sm")]: {
      // Responsive styles for small screens and below
      flexDirection: "column-reverse",
    },
  },
};

// const styles = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
//   myStyles: {
//     // Give your styles a descriptive name
//     mainContainer: {
//       flexDirection: "column-reverse",
//       justifyContent: "space-between",
//       alignItems: "stretch",
//       [createTheme().breakpoints.down("sm")]: {
//         // Responsive styles for small screens and below
//       },
//     },
//   },
// });

// export default styles;
