import React from "react";
import { Box } from "@mui/material";
import PostItem from "../PostItem";
import CreatePost from "../CreatePost";

const PostList: React.FC = () => {
    return (
        <Box flex={2} p={2}>
            <Box>
                <PostItem />
                <PostItem />
                <PostItem />
            </Box>
            <CreatePost />
        </Box>
    );
};

export default PostList;
