import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const PostItem: React.FC = () => {
    return (
        <Card sx={{ marginBottom: "25px" }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Kirill Kononov"
                subheader="December 19, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://www.gannett-cdn.com/-mm-/7e482a443740f52337eba28dff4794963c9ca5ad/c=0-307-2996-2000/local/-/media/2017/04/08/DetroitFreePress/DetroitFreePress/636272860177466947-2018-Dodge-Demon-32.JPG?width=2996&height=1693&fit=crop&format=pjpg&auto=webp"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default PostItem;
