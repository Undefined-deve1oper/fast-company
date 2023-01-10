import React from "react";
import {
    AppBar,
    Avatar,
    Badge,
    Menu,
    MenuItem,
    Typography,
    Button
} from "@mui/material";
import {
    Mail,
    Notifications,
    People,
    Search as SearchIcon
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import {
    IconsBox,
    Search,
    SearchInput,
    StyledToolbar,
    UserBox
} from "./styles/styledHeader";

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <NavLink to="/" className="logo">
                    <People sx={{ display: { xs: "block", sm: "none" } }} />
                    <Typography
                        variant="h6"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        Fast Company
                    </Typography>
                </NavLink>
                <Search>
                    <SearchIcon />
                    <SearchInput placeholder="Search..." fullWidth />
                </Search>
                <IconsBox>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Button>
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            src="https://rare-gallery.com/uploads/posts/127231-dodge-challenger-srt-demon-2018-hd.jpg"
                            onClick={handleOpen}
                        />
                    </Button>
                </IconsBox>
                <UserBox onClick={handleOpen}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://rare-gallery.com/uploads/posts/127231-dodge-challenger-srt-demon-2018-hd.jpg"
                    />
                    <Typography variant="subtitle2">Kirill</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                open={open}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Header;
