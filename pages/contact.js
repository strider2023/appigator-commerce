import React from 'react';
import Head from 'next/head';
import { Hidden } from '@material-ui/core';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

function Contact() {
    return (
        <>
            <Head>
                <title>Surplusss</title>
                <meta name="description" content="Surplusss contact us page" />
            </Head>
            <Header />
            <Hidden xsDown>
                <Footer />
            </Hidden>
        </>
    )
}

export default Contact
