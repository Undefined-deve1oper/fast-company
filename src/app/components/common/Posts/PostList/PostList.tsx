import React from "react";
import { Box } from "@mui/material";
import PostItem from "../PostItem";

const PostList: React.FC = () => {
    return (
        <Box flex={2} p={2}>
            <PostItem />
            <PostItem />
            <PostItem />
        </Box>
    );
};

export default PostList;
