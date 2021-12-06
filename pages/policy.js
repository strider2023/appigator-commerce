import React from 'react';
import Head from 'next/head';
import { Container, Hidden, Typography } from '@material-ui/core';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

import styles from '../styles/Policy.module.scss';

function Policy() {
    return (
        <>
            <Head>
                <title>Surplusss</title>
                <meta name="description" content="Surplusss policy page" />
            </Head>
            <Header />
            <Container className={styles.policyTextContainer} maxWidth="lg">
                <Typography variant="h4">
                    Terms and Conditions
                </Typography>
                <Typography variant="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique maximus quam, sit amet congue diam dictum eget. Proin consectetur magna in dignissim scelerisque. Morbi mattis bibendum scelerisque. Aliquam fringilla elit turpis, a pulvinar ipsum porttitor vitae. Suspendisse interdum, lorem nec varius vehicula, ligula tortor aliquam turpis, eu sagittis lorem orci at metus. Praesent et bibendum risus. Morbi suscipit tincidunt nunc sed blandit. Duis vel ligula in sapien eleifend pretium sit amet id velit. Proin sit amet gravida risus. Etiam laoreet metus id dolor egestas blandit. Aliquam dui turpis, finibus in mauris sit amet, aliquam scelerisque libero.

                    Donec cursus faucibus nibh congue semper. Phasellus vulputate eros tempor sem tincidunt lobortis. Etiam feugiat dignissim mi a fermentum. Sed efficitur porta mollis. Nunc laoreet sit amet nibh ac pulvinar. Cras tortor diam, aliquet vitae nunc ac, sollicitudin varius lacus. Mauris posuere turpis eget ullamcorper sagittis. Nulla eu turpis arcu. Donec a mi in leo elementum sodales.

                    Ut quam libero, varius lacinia tristique et, luctus facilisis justo. Curabitur imperdiet, ante sit amet ullamcorper lobortis, magna turpis congue quam, et pharetra tortor nunc non diam. Mauris vel augue varius, luctus nisi nec, efficitur dolor. Vestibulum varius erat eget tortor malesuada, et aliquet ex sodales. Praesent dictum mauris eu dui gravida, et tincidunt velit tempor. Fusce pharetra diam quis varius tristique. Suspendisse hendrerit mi a purus suscipit dignissim vitae id nibh. Morbi maximus augue a aliquam tristique. Sed ut justo cursus, suscipit quam non, convallis tortor. In pretium massa vitae viverra sollicitudin. Fusce sit amet rhoncus purus, in commodo augue. Morbi rhoncus, est eget malesuada volutpat, est tellus commodo mauris, a imperdiet metus magna sed ipsum. Proin varius ut velit non euismod.

                    Integer viverra est odio, eget volutpat felis molestie vitae. Praesent sit amet ullamcorper tortor, id consectetur dui. Cras quis magna volutpat, viverra ex non, aliquam eros. Sed posuere condimentum tellus, et eleifend massa porttitor sit amet. Cras aliquam tellus metus. Morbi eleifend, neque at venenatis blandit, enim magna tempus est, eget faucibus leo dolor eget ligula. Vestibulum molestie orci lacus, a gravida justo maximus ac. Nunc consequat feugiat turpis, vel interdum sapien auctor sed. Donec tempor orci id elementum bibendum. Donec mollis urna id dui pharetra pretium. Suspendisse a dolor et ex lacinia ornare.

                    Vivamus sit amet arcu vel odio pulvinar dictum. Vestibulum et vestibulum dolor. Maecenas eu ipsum commodo, euismod arcu ut, posuere mi. Nulla sit amet cursus libero, hendrerit dapibus velit. Nulla at mattis elit, id dapibus sapien. Integer imperdiet leo vitae laoreet placerat. Phasellus ac maximus augue. Donec sit amet mauris tristique, sagittis nunc at, aliquet neque. Etiam risus sem, rhoncus non pulvinar quis, tempus vitae odio. Proin sit amet risus sodales, cursus justo ut, commodo ipsum. Sed blandit neque at consequat placerat. Nulla sed euismod tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                    Generated 5 paragraphs, 467 words, 3117 bytes of Lorem Ipsum
                </Typography>
            </Container>
            <Hidden xsDown>
                <Footer />
            </Hidden>
        </>
    )
}

export default Policy
