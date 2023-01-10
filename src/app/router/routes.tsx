import React from "react";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import {
    AccountBox,
    Article,
    Bookmark,
    Home,
    People,
    Person
} from "@mui/icons-material";

const Login = React.lazy(() => import("../layouts/login"));
const Main = React.lazy(() => import("../layouts/main"));
const Users = React.lazy(() => import("../layouts/users"));

export type RoutesNavType = {
    path: string;
    name: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
};

export const navigationRoutes = [
    { path: "/", name: "Home page", icon: Home },
    { path: "/users", name: "Users list", icon: People },
    { path: "/bookmarks", name: "bookmarks", icon: Bookmark },
    { path: "/friends", name: "Friends", icon: Person },
    { path: "/profile", name: "Profile", icon: AccountBox }
];

export const publicRoutes = [
    { path: "/", component: Main, exact: true },
    { path: "/login/:type?", component: Login, exact: true },
    { path: "/users/:userId?/:edit?", component: Users, exact: true }
];

export const privateRoutes = [
    { path: "/users/:userId?/:edit?", component: Users, exact: true }
];
