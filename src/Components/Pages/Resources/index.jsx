import React, { useState, useRef, useEffect } from 'react';
import {
    Typography,
    Grid
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import DialogCustom from '../../Dialog/index'; 
import CardCustom from '../../Card/index';
import HomeImg from '../../../Images/imgt.png';
import TeamworkImg from '../../../Images/teamWork.svg';
import CodingImg from '../../../Images/coding.png';
import ExerciseImg from '../../../Images/exercise.png';
import SocialInteractionImg from '../../../Images/socialInteraction.svg';
import PersonalImg from '../../../Images/personalInfo.png';

import { Link } from "react-router-dom";

import useStyles from './styles';

export default function ResourcesPage() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    return (
        <React.Fragment>
            <div style={{backgroundColor: '#EC6D0A', marginTop: '-1.5%', marginBottom: '2%'}}>
               <Typography style={{color: '#FFFFFF', fontSize: '55px'}} align={'center'}>Resources</Typography> 
            </div>

            <Grid container spacing={1} style={{marginLeft:"1%"}}>
                <Grid item xs={12} sm={3}>
                    <CardCustom
                        category={'Mentoring'}
                        snippet={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                        title={'TITLE'}
                        img={HomeImg}
                        handleClick={handleClickOpen}
                        colour={'#FF9505'}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <CardCustom
                        category={'Mentoring'}
                        snippet={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                        title={'TITLE'}
                        img={TeamworkImg}
                        handleClick={handleClickOpen}
                        colour={'#FF9505'}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <CardCustom
                        category={'Mentoring'}
                        snippet={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                        title={'TITLE'}
                        img={CodingImg}
                        handleClick={handleClickOpen}
                        colour={'#FF9505'}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <CardCustom
                        category={'Mentoring'}
                        snippet={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                        title={'TITLE'}
                        img={ExerciseImg}
                        handleClick={handleClickOpen}
                        colour={'#FF9505'}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={1} style={{marginLeft:"1%", marginTop:"2%"}}>
                <Grid item xs={12} sm={3}>
                    <CardCustom
                        category={'Mentoring'}
                        snippet={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                        title={'TITLE'}
                        img={SocialInteractionImg}
                        handleClick={handleClickOpen}
                        colour={'#83008F'}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <CardCustom
                        category={'Mentoring'}
                        snippet={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                        title={'TITLE'}
                        img={PersonalImg}
                        handleClick={handleClickOpen}
                        colour={'#83008F'}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <CardCustom
                        category={'Mentoring'}
                        snippet={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                        title={'TITLE'}
                        img={HomeImg}
                        handleClick={handleClickOpen}
                        colour={'#83008F'}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <CardCustom
                        category={'Mentoring'}
                        snippet={'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'}
                        title={'TITLE'}
                        img={HomeImg}
                        handleClick={handleClickOpen}
                        colour={'#83008F'}
                    />
                </Grid>
            </Grid>

            <DialogCustom
                onClickOpen={open}
                ref={descriptionElementRef}
                onClickClose={handleClose}
                title={'TITLE'}
            />
        </React.Fragment>
    )
}