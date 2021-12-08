import React from 'react';
import { Hidden } from '@material-ui/core';
import Head from 'next/head';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';
import ProductsGrid from '../components/products/ProductsGrid';

import styles from '../styles/Home.module.scss';
import ProductsCarousel from '../components/products/ProductsCarousel';
import ProductCategories from '../components/products/ProductCategories';

function Products() {

    return (
        <>
            <Head>
                <title>Surplusss</title>
                <meta name="description" content="Surplusss home page" />
            </Head>
            <Header displaySearch={true} />
            <ProductCategories />
            <ProductsCarousel />
            <div className={styles.homeCategoriesContainer}>
                <ProductsGrid />
                <ProductsGrid />
                <ProductsGrid />
                <ProductsGrid />
            </div>
            <Hidden xsDown>
                <Footer />
            </Hidden>
        </>
    )
}

export default Products
