// // import { spacing } from "@mui/system";
// // const spacingValue = spacing(1);
import { createTheme } from "@mui/system";

export const styles = {
  paper: {
    padding: createTheme().spacing(2),
  },

  root: {
    "& .MuiTextField-root": {
      margin: createTheme().spacing(1),
    },
  },
  textField: {
    margin: createTheme().spacing(1),
  },

  buttonSubmit: {
    marginBottom: "10px",
  },

  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  fileInput: {
    width: "97%",
    height: "80%",
    margin: "10px 0",
  },
};

// import { createTheme } from "@mui/material";

// export const MyTheme = createTheme({
//   palette: {

//     paper: {
//       padding: createTheme().spacing(2),
//     },

//     root: {
//       "& .MuiTextField-root": {
//         margin: createTheme().spacing(1),
//       },
//     },
//     textField: {
//       margin: createTheme().spacing(1),
//     },

//     buttonSubmit: {
//       marginBottom: "10px",
//     },

//     form: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//     },

//     fileInput: {
//       width: "97%",
//       height: "80%",
//       margin: "10px 0",
//     },
//   },
// });

// // export const styles = {};

// // export const styles = {
// //   appBar: {
// //     borderRadius: 15,
// //     margin: "30px 0",
// //     display: "flex",
// //     flexDirection: "row",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   heading: {
// //     color: "rgba(0,183,255,1)",
// //   },
// //   image: {
// //     marginLeft: "15px",
// //   },
// // };

// // // const theme = {
// // //   spacing:8
// // // }

// // // import { TextField, Paper, Box, Button } from "@mui/material";
// // //   import { spacing } from "@mui/system";

// // // export default function MyComponent() {
// // // const spacingValue = spacing(1); // Assuming theme spacing is set

// // //   return (
// // //     <Paper sx={{ padding: 2 }}>
// // //       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
// // //         <TextField sx={{ margin: spacingValue, width: "97%" }} />
// // //         <TextField sx={styles.textField} />
// // //         <Button
// // //           variant="contained"
// // //           type="submit"
// // //           sx={{ margin: "10px 0", marginBottom: 10 }}
// // //         >
// // //           Submit
// // //         </Button>
// // //       </Box>
// // //     </Paper>
// // //   );
// // // }
