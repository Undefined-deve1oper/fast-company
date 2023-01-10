import React from "react";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch
} from "@mui/material";
import {
    AccountBox,
    Article,
    Home,
    ModeNight,
    People,
    Person,
    Settings,
    Storefront
} from "@mui/icons-material";

const Sidebar: React.FC = () => {
    return (
        <Box
            bgcolor={"background.default"}
            color={"text.primary"}
            flex={1}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={"a"} href="/home">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home page" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={"a"} href="/home">
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={"a"} href="/home">
                            <ListItemIcon>
                                <People />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={"a"} href="/home">
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={"a"} href="/home">
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={"a"} href="/home">
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={"a"} href="/simple-list">
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={"a"} href="/simple-list">
                            <ListItemIcon>
                                <ModeNight />
                            </ListItemIcon>
                            <Switch />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;
