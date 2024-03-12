import { makeStyles } from "@mui/material";
import { spacing } from "@mui/system";

// const spacingValue = spacing(1);

// export const formStyles = {
//   textField: {
//     margin: spacingValue,
//   },
// };

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },

  paper: {
    padding: theme.spacing(2),
  },

  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  fileInput: {
    width: "97%",
    margin: "10px 0",
  },

  buttonSubmit: {
    marginBottom: 10,
  },
}));

// export const styles = {
//   appBar: {
//     borderRadius: 15,
//     margin: "30px 0",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heading: {
//     color: "rgba(0,183,255,1)",
//   },
//   image: {
//     marginLeft: "15px",
//   },
// };

// import { TextField, Paper, Box, Button } from "@mui/material";
//   import { spacing } from "@mui/system";

// export default function MyComponent() {
// const spacingValue = spacing(1); // Assuming theme spacing is set

//   return (
//     <Paper sx={{ padding: 2 }}>
//       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         <TextField sx={{ margin: spacingValue, width: "97%" }} />
//         <TextField sx={styles.textField} />
//         <Button
//           variant="contained"
//           type="submit"
//           sx={{ margin: "10px 0", marginBottom: 10 }}
//         >
//           Submit
//         </Button>
//       </Box>
//     </Paper>
//   );
// }
