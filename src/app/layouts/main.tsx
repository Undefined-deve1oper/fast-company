import React from "react";
import { Box } from "@mui/system";
import { PostList } from "../components/common/Posts";
import Rightbar from "../components/common/Rightbar";

const Main: React.FC = () => {
    return (
        <Box flex={2} p={2}>
            <PostList />
        </Box>
    );
};

export default Main;
