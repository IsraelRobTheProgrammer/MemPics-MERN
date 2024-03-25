import { createTheme } from "@mui/material/styles";

export const styles = {
  mainContainer: {
    justifyContent: "space-between",
    alignItems: "stretch",
    [createTheme().breakpoints.down("sm")]: {
      // Responsive styles for small screens and below
      flexDirection: "column-reverse",
    },
  },
};
