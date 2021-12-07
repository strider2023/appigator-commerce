import React from 'react';
import { useRouter } from 'next/router'
import { Fab, Hidden, Typography } from '@material-ui/core';
import Head from 'next/head';
import Header from '../../common/components/Header';
import Footer from '../../common/components/Footer';
import ProductList from '../../components/products/ProductList';
import Filter from '../../components/products/Filter';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';

import styles from '../../styles/Search.module.scss';

function Search() {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const { search } = router.query;

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
                <meta name="description" content="Surplusss search page" />
            </Head>
            <Header displaySearch={true}/>
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
            <Filter open={open} handleClose={handleClose} />
            <Typography variant="h6" className={styles.searchResultContainer}>
                {'Searching results for: ' + search}
            </Typography>
            <ProductList />
            <Hidden xsDown>
                <Footer />
            </Hidden>
        </>
    )
}

export default Search
