import React, { useState, useContext } from 'react';
import { LanguageContext } from '../common/providers/LanguageContext';
import Head from 'next/head';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, TextField, Container, Button, Hidden } from '@mui/material';
import Link from 'next/link';
// import { useHistory } from "react-router-dom";
import Notiflix from "notiflix";
import { useMutation, gql } from '@apollo/client';
// import useAuthState from '../common/hooks/useAuthState';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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

function Login() {
    const language = useContext(LanguageContext);
    // const history = useHistory();
    // const { addAuth } = useAuthState();
    const [values, setValues] = useState({
        password: '',
        email: '',
        showPassword: false,
    });

    const [userLogin, { loading, data, error }] = useMutation(AUTHENTICATE, {
        onError: (err) => {
            Notiflix.Notify.failure('Invalid credentials please try again.', { position: "right-bottom", });
        }
    });

    if (loading) {
        Notiflix.Loading.dots();
    }

    // if (data) {
    //     // console.log(data.authenticate);
    //     for (const res in data.authenticate) {
    //         cookies.set(res, data.authenticate[res], { path: '/' });
    //     }
    //     console.log(cookies.get('roles'), history);
    //     const user = {
    //         roles: cookies.get('roles'),
    //         phone: cookies.get('phone'),
    //         lastName: cookies.get('lastName'),
    //         firstName: cookies.get('firstName'),
    //         email: cookies.get('email'),
    //         token: cookies.get('token')
    //     };
    //     addAuth({ status: 'success', error: null, user });
    //     Notiflix.Loading.remove(300);
    //     history.replace('/app');
    // }

    const handleSubmit = (e) => {
        // userLogin({ variables: { 'userId': formData.email, 'password': formData.password } });
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Head>
                <title>Surplusss Login</title>
                <meta name="description" content="Surplusss login" />
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
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    labelWidth={70}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type={"submit"} variant="contained" color="primary" fullWidth className={styles.loginButton}>Login</Button>
                        </Grid>
                    </Grid>
                    <Link href="/forgot-password" variant="body2">
                        Forgot password?
                    </Link>
                    <Link href="/register" className={styles.registerLink} variant="body2">
                        Register
                    </Link>
                </form>
            </Container>
        </>
    )
}

export default Login
