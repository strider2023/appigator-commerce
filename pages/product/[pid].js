import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../common/components/Header';
import Footer from '../../common/components/Footer';
import { Hidden } from '@material-ui/core';

function ProductDetails() {
    const router = useRouter()
    const { pid } = router.query

    return (
        <>
            <Head>
                <title>Surplusss</title>
                <meta name="description" content="Surplusss product description page" />
            </Head>
            <Header displaySearch={true}/>
            {pid}
            <Hidden xsDown>
                <Footer />
            </Hidden>
        </>
    )
}

export default ProductDetails
