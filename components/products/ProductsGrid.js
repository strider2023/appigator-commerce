import React from 'react';
import { Grid, Hidden, Typography, Button, Container, Divider } from '@mui/material';
import { sectionData } from '../../services/Products.service';

import styles from './styles/ProductsGrid.module.scss';

function ProductsGrid() {
    return (
        <Container className={styles.productsGridContainer} maxWidth="lg">
            <Typography variant="h6">
                {sectionData.sectionName}
            </Typography>
            <Divider />
            <Grid container spacing={3}>
                {sectionData.previewItems.map((item, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                        <div className={styles.product}>
                            <img src={item.img} alt={item.title} className={styles.productImage} />
                            <div className={styles.productDecriptionContainer}>
                                <Typography variant="subtitle1">
                                    {item.title}
                                </Typography>
                                {/* <Typography variant="subtitle2">
                                    {item.price}
                                </Typography> */}
                                {/* <Button fullWidth variant="outlined" className={styles.productViewButton} color="primary">View</Button> */}
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <Button color="primary">See More</Button>
        </Container>
    )
}

export default ProductsGrid
