import React, { useState, useRef, useEffect } from 'react';
import {
    Typography,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
} from '@material-ui/core';

import useStyles from './styles';

export default function CardCustom(props) {
    const classes = useStyles();
    const { category, snippet, title, img, handleClick, colour } = props;

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title="img"
                    />
                    <CardContent>
                    <Typography gutterBottom align={'center'} style={{backgroundColor: colour, color: '#FFFFFF'}}>
                        {category}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" align={"center"}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" align={"center"}>
                        {snippet}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{justifyContent: "center"}}>
                    <Button 
                        size="small"
                        variant="outlined"
                        color="inherit"
                        onClick={handleClick}
                        style={{color: colour, textTransform: 'none', fontSize: 14}}
                    >
                        Read More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}