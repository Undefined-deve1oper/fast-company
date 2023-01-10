import React, { useState } from "react";
import {
    AppBar,
    Avatar,
    Badge,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    styled,
    Button,
    Box
} from "@mui/material";
import {
    Mail,
    Notifications,
    People,
    Search as SearchIcon
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    color: theme.palette.primary.main
}));
const IconsBox = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

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
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    Fast Company
                </Typography>
                <Search>
                    <SearchIcon />
                    <InputBase placeholder="Search..." fullWidth />
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
