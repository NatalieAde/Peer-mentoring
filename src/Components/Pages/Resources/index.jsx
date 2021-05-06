import React, { useState, useRef, useEffect } from 'react';
import {
    Typography,
    Grid,
} from '@material-ui/core';
import DialogCustom from '../../Dialog/index'; 
import CardCustom from '../../Card/index';

import {RESOURCES} from '../../PageText/model';

import useStyles from './styles';

export default function ResourcesPage() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState(null);
  
    function handleClickOpen(event, item) {
      event.persist();
      setProduct(item);
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }

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
            <Grid container spacing={1} justify="center">
            {RESOURCES.map(product => (
                <>
                {product.category === "Mentoring Guideline" ?
                    <Grid item xs={12} sm={3} key={product.id}>
                        <CardCustom
                            category={product.category}
                            snippet={product.snippet}
                            title={product.title}
                            img={product.img}
                            handleClick={event => handleClickOpen(event, product)}
                            colour={'#83008F'}
                        />
                    </Grid>
                    :
                    product.category === "Blog" ?
                    <Grid item xs={12} sm={3} key={product.id}>
                        <CardCustom
                            category={product.category}
                            snippet={product.snippet}
                            title={product.title}
                            img={product.img}
                            handleClick={event => handleClickOpen(event, product)}
                            colour={'#087FD8'}
                        />
                    </Grid>
                    :
                    <Grid item xs={12} sm={3} key={product.id}>
                    <CardCustom
                        category={product.category}
                        snippet={product.snippet}
                        title={product.title}
                        img={product.img}
                        handleClick={event => handleClickOpen(event, product)}
                        colour={'#FF9505'}
                    />
                </Grid>
                }

                </>
            ))}
            </Grid>
            {open && product && (
                <DialogCustom
                    keyID={product.id}
                    onClickOpen={open}
                    ref={descriptionElementRef}
                    onClickClose={handleClose}
                    title={product.title}
                >
                    <div style={{marginBottom:'2%'}}>
                        <Typography variant={'h5'}>{product.subTitle1}</Typography>
                    </div>
                    <div style={{marginBottom:'2%'}}>
                        <Typography>{product.para1}</Typography>
                    </div>
                    <div style={{marginBottom:'2%'}}>
                        <Typography>{product.para2}</Typography>
                    </div>
                    <div style={{marginBottom:'4%'}}>
                        <Typography>{product.para3}</Typography>
                    </div>
                    <img src={product.img2} style={{width: "40%"}} />
                    <img src={product.img3} style={{width: "40%"}} />
                    <Typography variant={'h5'} style={{marginBottom:'2%'}}>{product.subTitle}</Typography>
                    {product.list && product.list.map(product => (
                        <li style={{marginBottom:'2%'}}>{product}</li>
                    ))}
                </DialogCustom>
            )}
      </Grid>
      </React.Fragment>
    );
  }