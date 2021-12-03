import React, { useContext } from 'react';
import { LanguageContext } from '../../common/providers/LanguageContext';
import { Button, Grid, Typography } from '@material-ui/core';

import styles from './styles/Footer.module.scss'

function Footer() {
    const language = useContext(LanguageContext);
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLogoHolder}>
                <img src={"../images/shopping-bag.png"} className={styles.footerLogo} />
                <Typography variant="h4" color="primary">
                    {language.app_name}
                </Typography>
            </div>
            <Grid container className={styles.footerLinksHolder}>
                <Grid item xs={12} sm={6}>
                    <Button fullWidth>Policy</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button fullWidth>Terms and Conditions</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button fullWidth>About Us</Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button fullWidth>Contact Us</Button>
                </Grid>
            </Grid>
            <Typography variant="body2" color="textSecondary" align="center" className={styles.footerTextHolder}>
                {language.copyright_footer}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    )
}

export default Footer
