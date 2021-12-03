import React from 'react';
import Head from 'next/head';
import Header from '../components/home/Header';
import ProductsGrid from '../components/products/ProductsGrid';

function Products() {
    return (
        <>
            <Head>
                <title>Surplusss</title>
                <meta name="description" content="Surplusss products page" />
            </Head>
            <Header />
            <ProductsGrid />
        </>
    )
}

export default Products
