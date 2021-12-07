import Head from 'next/head';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';
import WebsiteHeader from '../components/about/WebsiteHeader';
import HowItWorks from '../components/about/HowItWorks';

import styles from '../styles/About.module.scss';
import { Hidden } from '@material-ui/core';

function About() {
    return (
        <>
            <Head>
                <title>Surplusss</title>
                <meta name="description" content="Surplusss about page" />
            </Head>
            <Header displaySearch={false}/>
            <WebsiteHeader />
            <HowItWorks />
            <Hidden xsDown>
                <Footer />
            </Hidden>
        </>
    )
}

export default About
