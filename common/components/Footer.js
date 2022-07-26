import React, { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../providers/LanguageContext';
import { Button, Grid, Typography } from '@mui/material';
import { navItems } from '../../constants/NavItems.constants';

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
                {
                    navItems.map((obj, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                            <Link href={obj.path} variant="body2">
                                <Button fullWidth>
                                    {obj.name}
                                </Button>
                            </Link>
                        </Grid>
                    ))
                }
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
