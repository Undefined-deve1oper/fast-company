import React from "react";
import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";
import { theme } from "../../../theme.js";

const Rightbar = () => {
    return (
        <Box
            flex={1}
            p={2}
            sx={{
                display: {
                    [theme.breakpoints.down("lg")]: { display: "none" },
                    md: "block"
                }
            }}
        >
            <Box position="fixed" width={280} right={10}>
                <Typography variant="h6" fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup
                    sx={{ display: "flex", justifyContent: "start" }}
                    max={5}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src="https://avatarko.ru/img/kartinka/30/akula_galstuk_29976.jpg"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://avatarko.ru/img/avatar/26/devushka_blondinka_kapyushon_25929.jpg"
                    />
                    <Avatar src="https://avatarko.ru/img/avatar/33/devushka_34012.jpg" />
                    <Avatar
                        alt="Agnes Walker"
                        src="https://avatarko.ru/img/avatar/9/muzhchina_kapyushon_serial_8126.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://avatarko.ru/img/avatar/31/devushka_30870.jpg"
                    />
                    <Avatar
                        alt="Nastya Henderson"
                        src="https://avatarko.ru/img/avatar/9/muzhchina_serial_Game_of_Thrones_8436.jpg"
                    />
                    <Avatar
                        alt="Anton Henderson"
                        src="https://avatarko.ru/img/avatar/14/sport_snowboard_13261.jpg"
                    />
                    <Avatar
                        alt="David Henderson"
                        src="https://avatarko.ru/img/avatar/6/sport_motocikl_5228.jpg"
                    />
                    <Avatar
                        alt="Anna Henderson"
                        src="https://avatarko.ru/img/avatar/25/devushka_blondinka_sport_24815.jpg"
                    />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Latest Photos
                </Typography>
                <ImageList cols={2} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src={
                                "https://focus.ua/static/storage/thumbs/920x465/7/5f/b274d2a2-4dc57d06dd0d61277c07c738eb5ea5f7.jpg?v=1764_1"
                            }
                            srcSet={
                                "https://focus.ua/static/storage/thumbs/920x465/7/5f/b274d2a2-4dc57d06dd0d61277c07c738eb5ea5f7.jpg?v=1764_1"
                            }
                            alt={"Image"}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={
                                "https://i.ytimg.com/vi/Uy-mSOwUndM/maxresdefault.jpg"
                            }
                            srcSet={
                                "https://i.ytimg.com/vi/Uy-mSOwUndM/maxresdefault.jpg"
                            }
                            alt={"Image"}
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2}>
                    Latest Conversations
                </Typography>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 280,
                        bgcolor: "background.paper"
                    }}
                >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://avatarko.ru/img/avatar/6/sport_motocikl_5228.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {
                                        " — I'll be in your neighborhood doing errands this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Travis Howard"
                                src="https://avatarko.ru/img/avatar/25/devushka_blondinka_sport_24815.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {
                                        " — Wish I could come, but I'm out of town this…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Cindy Baker"
                                src="https://avatarko.ru/img/avatar/14/sport_snowboard_13261.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {
                                        " — Do you have Paris recommendations? Have you ever…"
                                    }
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Rightbar;
