import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';

export default function DialogCustom(props) {
    const {children, onClickOpen, ref, onClickClose, title, keyID} = props;

    return (
        <div>
            <Dialog
                key={keyID}
                maxWidth={'md'}
                open={onClickOpen}
                onClose={onClickClose}
                scroll={'paper'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
                <DialogContent dividers={true}>
                <DialogContentText
                    id="scroll-dialog-description"
                    ref={ref}
                    tabIndex={-1}
                >
                    {children}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button 
                    size="small"
                    variant="outlined"
                    color="inherit"
                    style={{textTransform: 'none', fontSize: 14}}
                    onClick={onClickClose} 
                    color="primary">
                    Done
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}