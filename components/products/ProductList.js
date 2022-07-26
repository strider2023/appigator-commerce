import React from 'react';
import { useRouter } from 'next/router';
import { Typography, Divider, Container, Fab } from '@mui/material';
import { itemData } from '../../services/Products.service';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import styles from './styles/ProductList.module.scss';

function ProductList() {
    const router = useRouter();

    const onViewItemSelect = () => {
        router.push('/product/123');
    }

    return (
        <Container className={styles.productsListContainer} maxWidth={'lg'}>
            {itemData.length > 0 && itemData.map((item, index) => (
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
                        <div className={styles.productButtonContainer}>
                            <Fab variant="extended" color="primary" className={styles.productButton} onClick={onViewItemSelect} size="medium">
                                <VisibilityIcon />
                                View
                            </Fab>
                            <Fab variant="extended" color="secondary" className={styles.productButton} size="medium">
                                <AddShoppingCartIcon />
                                Add to Cart
                            </Fab>
                        </div>
                        {index < (itemData.length - 1) && <Divider />}
                    </div>
                </div>
            ))}
            {
                itemData.length === 0 &&
                <div className={styles.emptySearchContainer}>
                    <img src={"../images/search.png"} alt={'no data found'} className={styles.emptyImage} />
                    <Typography variant="h4">
                        No Data Found
                    </Typography>
                </div>
            }
        </Container>
    )
}

export default ProductList
