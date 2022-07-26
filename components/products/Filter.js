import React from 'react';
import { Button, Dialog, AppBar, Toolbar, IconButton, Typography, Slide, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import styles from './styles/Filter.module.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Filter(props) {

    return (
        <div>
            <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition} className={styles.productsFilterDialog}>
                <AppBar className={styles.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={styles.title}>
                            Filters
                        </Typography>
                        <Button autoFocus color="inherit" onClick={props.handleClose}>
                            update
                        </Button>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <p>Content</p>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
}

export default Filter
