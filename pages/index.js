import React from 'react';
import { Fab, Hidden } from '@material-ui/core';
import Head from 'next/head';
import Header from '../common/components/Header';
import ProductsGrid from '../components/products/ProductsGrid';
import Filter from '../components/products/Filter';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';

import styles from '../styles/Home.module.scss';
import ProductSearch from '../components/products/ProductSearch';

function Products() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Head>
                <title>Surplusss</title>
                <meta name="description" content="Surplusss products page" />
            </Head>
            <Header />
            <div className={styles.searchContainer}>
                <ProductSearch />
                <Hidden xsDown>
                    <Fab variant="extended" onClick={handleClickOpen} color="primary" className={styles.filterButton}>
                        <FilterListRoundedIcon />
                        Filters
                    </Fab>
                </Hidden>
                <Hidden smUp>
                    <Fab onClick={handleClickOpen} color="primary" className={styles.filterButton} size="medium">
                        <FilterListRoundedIcon />
                    </Fab>
                </Hidden>
            </div>
            <ProductsGrid />
            <Filter open={open} handleClose={handleClose} />
        </>
    )
}

export default Products
