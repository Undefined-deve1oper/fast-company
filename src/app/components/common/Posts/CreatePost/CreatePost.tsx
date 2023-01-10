import React, { useState } from "react";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import {
    Add as AddIcon,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
});

const CreatePost = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };
    const closeModal = () => {
        setOpen(false);
    };

    return (
        <>
            <Tooltip
                title="Create post"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", sm: 30 }
                }}
                onClick={openModal}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal open={open} onClose={closeModal}>
                <Box
                    width={400}
                    height={300}
                    p={3}
                    borderRadius={5}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            src="https://rare-gallery.com/uploads/posts/127231-dodge-challenger-srt-demon-2018-hd.jpg"
                        />
                        <Typography fontWeight={500} variant="subtitle2">
                            Kirill Kononov
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant={"standard"}
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color={"primary"} />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup variant="contained" fullWidth>
                        <Button sx={{ width: "100px" }}>Post</Button>
                        <Button>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default CreatePost;
