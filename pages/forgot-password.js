import React, { useState, useContext } from 'react';
import { LanguageContext } from '../common/providers/LanguageContext';
import Head from 'next/head';
import { Container, Hidden, TextField, Grid, Button } from '@material-ui/core';
import Link from 'next/link';
import Notiflix from "notiflix";
import { useMutation, gql } from '@apollo/client';

import styles from "../styles/Login.module.scss";

const AUTHENTICATE = gql`
      mutation ($userId: String!, $password: String!){
        authenticate(userId: $userId, password: $password) {
            firstName
            token
            lastName
            emailVerified
            middleName
            organizationId
            phone
            phoneVerified
            roles
            username
            email
        }
      }
    `

function ForgotPassword() {
    const language = useContext(LanguageContext);
    const [values, setValues] = useState({
        password: ''
    });

    const [userLogin, { loading, data, error }] = useMutation(AUTHENTICATE, {
        onError: (err) => {
            Notiflix.Notify.failure('Invalid credentials please try again.', { position: "right-bottom", });
        }
    });

    if (loading) {
        Notiflix.Loading.dots();
    }

    if (data) {

    }

    const handleSubmit = (e) => {
        console.log(formData);
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <>
            <Head>
                <title>Surplusss - Forgot Password</title>
                <meta name="description" content="Surplusss forgot password" />
            </Head>
            <Container component="main" maxWidth="xs">
                <Hidden smDown>
                    <img src={"../images/login.jpg"} className={styles.loginImage} />
                </Hidden>
                <form className={styles.loginBaseContainer} autoComplete="off" onSubmit={handleSubmit}>
                    <Link href="/">
                        <h1>{language.app_name}</h1>
                    </Link>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField required id="email" label="Email" onChange={handleChange('email')} type="email" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type={"submit"} variant="contained" color="primary" fullWidth className={styles.loginButton}>Retrieve Password</Button>
                        </Grid>
                    </Grid>
                    <Link href="/login" variant="body2">
                        Back to Login
                    </Link>
                    <Link href="/register" className={styles.registerLink} variant="body2">
                        Register
                    </Link>
                </form>
            </Container>
        </>
    )
}

export default ForgotPassword
