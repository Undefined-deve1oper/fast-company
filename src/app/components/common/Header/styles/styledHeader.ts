import { Box, InputBase, styled, Toolbar } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "5px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    [theme.breakpoints.down("sm")]: {
        width: "60%"
    },
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
const SearchInput = styled(InputBase)(({ theme }) => ({
    color: theme.palette.primary.main,
    padding: "0px",
    "& .MuiInputBase-input": {
        padding: "0px"
    }
}));

export { SearchInput, UserBox, IconsBox, Search, StyledToolbar };
