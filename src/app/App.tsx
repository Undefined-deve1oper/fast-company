import React, { useState } from "react";
import {
    Box,
    createTheme,
    CssBaseline,
    PaletteMode,
    Stack,
    ThemeProvider
} from "@mui/material";
import "./styles/app.css";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";

const App: React.FC = () => {
    const [mode, setMode] = useState<PaletteMode>("dark");

    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    });

    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={darkTheme}>
                <Box
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    sx={{ minHeight: "100vh" }}
                >
                    <Header />
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                    >
                        <Sidebar />
                    </Stack>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default App;
