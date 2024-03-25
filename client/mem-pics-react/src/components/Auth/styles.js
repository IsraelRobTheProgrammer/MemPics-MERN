import { createTheme } from "@mui/material/styles";

export const styles = {
    paper: {
        marginTop: createTheme().spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: createTheme().spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: createTheme().spacing(1),
        },
    },
    avatar: {
        margin: createTheme().spacing(1),
        backgroundColor: createTheme().palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: createTheme().spacing(3),
    },
    submit: {
        margin: createTheme().spacing(3, 0, 2),
    },
    googleButton: {
        display: "flex",
        justifyContent: "center",
        // marginTop: createTheme().spacing(2),
        marginBottom: createTheme().spacing(2),
    },
}