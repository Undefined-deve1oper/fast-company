import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1760a5",
            light: "skyblue"
        },
        secondary: {
            main: "#15c630"
        },
        otherColor: {
            main: "#999"
        }
    },
    breakpoints: {
        values: {
            xs: 479,
            sm: 756,
            md: 992,
            lg: 1200,
            xl: 1536
        }
    }
});
