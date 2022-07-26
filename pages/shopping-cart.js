import React from 'react';
import Head from 'next/head';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';
import { Hidden, Typography } from '@mui/material';

import styles from '../styles/ShoppingCart.module.scss';

function ShoppingCart() {
    return (
        <>
            <Head>
                <title>Surplusss</title>
                <meta name="description" content="Surplusss shopping cart page" />
            </Head>
            <Header displaySearch={false} />
            <div className={styles.emptyCartContainer}>
                <img src={"../images/empty-cart.png"} alt={'empty cart'} className={styles.emptyImage} />
                <Typography variant="h4">
                    Shopping Cart Empty
                </Typography>
            </div>
            <Hidden xsDown>
                <Footer />
            </Hidden>
        </>
    )
}

export default ShoppingCart
