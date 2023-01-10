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
import Rightbar from "./components/common/Rightbar";
import { PostList } from "./components/common/Posts";

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
                        sx={{ height: "100%" }}
                    >
                        <Sidebar />
                        <PostList />
                        <Rightbar />
                    </Stack>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default App;
