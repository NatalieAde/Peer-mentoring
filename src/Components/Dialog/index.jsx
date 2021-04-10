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
    const {onClickOpen, ref, onClickClose, title} = props;

    return (
        <div>
            <Dialog
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
                    {[...new Array(50)]
                    .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={onClickClose} color="primary">
                    Cancel
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}