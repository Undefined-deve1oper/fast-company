import React, { useState } from "react";
import {
    Box,
    createTheme,
    CssBaseline,
    PaletteMode,
    Stack,
    ThemeProvider
} from "@mui/material";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import "./styles/app.css";
import { navigationRoutes } from "./router/routes";
import AppRouter from "./router/AppRouter";
import Rightbar from "./components/common/Rightbar";

const App: React.FC = () => {
    const [mode, setMode] = useState<PaletteMode>("dark");

    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    });

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Box bgcolor={"background.default"} color={"text.primary"}>
                    <Header />
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
                    >
                        <Sidebar routes={navigationRoutes} />
                        <AppRouter />
                        <Rightbar />
                    </Stack>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default App;
