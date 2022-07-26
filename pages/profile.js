import React from 'react';
import Head from 'next/head';
import { Hidden } from '@mui/material';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

function Profile() {
    return (
        <>
            <Head>
                <title>Surplusss</title>
                <meta name="description" content="Surplusss profile page" />
            </Head>
            <Header displaySearch={false} />
            <Hidden xsDown>
                <Footer />
            </Hidden>
        </>
    )
}

export default Profile
