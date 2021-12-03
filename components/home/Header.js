import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../common/providers/LanguageContext';
import Cookies from 'universal-cookie';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Button, Hidden, Icon, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { navItems } from '../../constants/NavItems.constants';

import styles from './styles/Header.module.scss'

function Header() {
    const language = useContext(LanguageContext);
    const cookies = new Cookies();
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = (e) => {
        setCollapsed(!collapsed);
    };

    return (
        <AppBar position="static" className={styles.websiteHeaderContainer} elevation={0}>
            <Toolbar>
                <Hidden smUp>
                    <IconButton edge="start" color="primary" aria-label="menu" onClick={toggleCollapsed}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <img src={"../images/shopping-bag.png"} className={styles.headerLogo} />
                <Link href="/" variant="body2" className={styles.navLink}>
                    <Typography variant="h6" color="primary">
                        {language.app_name}
                    </Typography>
                </Link>
                <Hidden smDown>
                    {
                        navItems.map((obj, i) => (
                            <Link href={obj.path} variant="body2" className={styles.navLink} key={i}>
                                <Button color="primary">
                                    {obj.name}
                                </Button>
                            </Link>
                        ))
                    }
                </Hidden>
                <Hidden smUp>
                    <Drawer open={collapsed} onClose={toggleCollapsed}>
                        <div className={styles.headerDrawerContainer}>
                            {
                                cookies.get('firstName') ? (
                                    <>
                                        <Avatar className={styles.headerDrawerProfileAvatar}>{`${cookies.get('firstName').charAt(0)}${cookies.get('lastName').charAt(0)}`}</Avatar>
                                        <Typography variant="h5" className={styles.headerDrawerProfileName}>
                                            {`${cookies.get('firstName')} ${cookies.get('lastName')}`}
                                        </Typography>
                                    </>
                                ) : (
                                    <>
                                        <Avatar className={styles.headerDrawerProfileAvatar}><PersonIcon /></Avatar>
                                        <Button href="/login" className={styles.headerDrawerLoginBtn}>Login</Button>
                                    </>
                                )
                            }
                        </div>
                        <List className={styles.drawerList}>
                            {
                                navItems.map((obj, index) => (
                                    <Link href={obj.path} variant="body2" className={styles.navLink} key={index}>
                                        <ListItem button key={obj.name}>
                                            <ListItemIcon>
                                                <Icon>{obj.icon}</Icon>
                                            </ListItemIcon>
                                            <ListItemText primary={obj.name} />
                                        </ListItem>
                                    </Link>
                                ))
                            }
                        </List>
                        <div className={styles.headerDrawerBrandingContainer}>
                            <h1>Surplusss</h1>
                            <p>Version: 0.1.0</p>
                        </div>
                    </Drawer>
                </Hidden>
                <Link href="/login" variant="body2">
                    <Button color="primary">
                        <AccountCircleIcon />
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header