import React from 'react';
import { Typography, Button, Container } from '@material-ui/core';
import { itemData } from '../../services/Products.service';

import styles from './styles/ProductList.module.scss';

function ProductList() {
    return (
        <Container className={styles.productsListContainer} maxWidth={'lg'}>
            {itemData.map((item, index) => (
                <div className={styles.product} key={index}>
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
            ))}
        </Container>
    )
}

export default ProductList
