import React from 'react';
import { Grid, Container, IconButton, Typography, Button } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { itemData } from '../../services/Products.service';

import styles from './styles/ProductsGrid.module.scss';

function ProductsGrid() {
    return (
        <div className={styles.productsGridContainer}>
            <Grid container spacing={3}>
                {itemData.map((item, index) => (
                    <Grid item xs={6} sm={4} lg={3} xl={2} key={index}>
                        <div className={styles.product}>
                            <img src={item.img} alt={item.title} className={styles.productImage} />
                            <div className={styles.productDecriptionContainer}>
                                <Typography variant="h6">
                                    {item.title}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {item.price}
                                </Typography>
                                <Typography variant="subtitle2">
                                    {item.seller}
                                </Typography>
                                <Button fullWidth variant="outlined" className={styles.productViewButton} color="primary">View</Button>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ProductsGrid
