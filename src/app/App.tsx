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
import Rightbar from "./components/common/Rightbar";
import { PostList } from "./components/common/Posts";
import "./styles/app.css";

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
                <Box bgcolor={"background.default"} color={"text.primary"}>
                    <Header />
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="space-between"
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
