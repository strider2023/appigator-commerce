import { Divider, Typography } from '@mui/material';
import React from 'react';

import styles from './styles/ProductDescription.module.scss';

function ProductDescription() {
    return (
        <div className={styles.productDescriptionContianer}>
            <Typography variant="h4">
                Product Name
            </Typography>
            <Typography variant="subtitle1">
                Catgory and Sub category
            </Typography>
            <Divider />
        </div>
    )
}

export default ProductDescription
