import React, { useState } from "react";
import {
    Box,
    createTheme,
    CssBaseline,
    PaletteMode,
    ThemeProvider
} from "@mui/material";
import "./styles/app.css";
import Header from "./components/common/Header";

const App: React.FC = () => {
    const [mode, setMode] = useState<PaletteMode>("light");

    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    });

    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={darkTheme}>
                <Box bgcolor={"background.default"} color={"text.primary"}>
                    <Header />
                </Box>
            </ThemeProvider>
        </>
    );
};

export default App;
