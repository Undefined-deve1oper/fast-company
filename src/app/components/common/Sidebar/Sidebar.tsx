import React from "react";
import {
    Box,
    Icon,
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
import { RoutesNavType } from "../../../router/routes";
import { NavLink } from "react-router-dom";

type SidebarType = {
    routes: RoutesNavType[];
};

const Sidebar: React.FC<SidebarType> = ({ routes }) => {
    return (
        <Box
            bgcolor={"background.default"}
            color={"text.primary"}
            flex={1}
            p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position={"fixed"}>
                <List>
                    {routes.map((route) => (
                        <NavLink to={route.path}>
                            <ListItemButton>
                                {route.icon && (
                                    <ListItemIcon>
                                        <Icon component={route.icon} />
                                    </ListItemIcon>
                                )}
                                <ListItemText primary={route.name} />
                            </ListItemButton>
                        </NavLink>
                    ))}
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
