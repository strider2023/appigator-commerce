import React, { useState, useContext } from 'react';
import Head from 'next/head';
import { Container, Button, Grid, Stepper, Step, StepLabel } from '@mui/material';
import Link from 'next/link';
import Notiflix from "notiflix";
import { useMutation, gql } from '@apollo/client';
import { LanguageContext } from '../common/providers/LanguageContext';
import { steps } from '../constants/RegistrationForm.constants';
import RegistrationPage1 from '../components/registartion/RegistrationPage1';

import styles from "../styles/Register.module.scss";
import RegistrationPage2 from '../components/registartion/RegistrationPage2';

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


function Register() {
    const language = useContext(LanguageContext);
    const [activeStep, setActiveStep] = React.useState(0);
    const [formData, setFormData] = useState(null);
    // const [stepFormData, setStepFormData] = useState(null);
    const [userRegistration, { loading, data, error }] = useMutation(AUTHENTICATE, {
        onError: (err) => {
            Notiflix.Notify.failure('Invalid credentials please try again.', { position: "right-bottom", });
        }
    });

    if (loading) {
        Notiflix.Loading.dots();
    }

    if (data) {

    }

    const handleSubmit = (e, stepFormData) => {
        setFormData({ ...formData, ...stepFormData });
        console.log(stepFormData);
        if (activeStep < (steps.length - 1)) {
            setActiveStep(activeStep + 1);
        } else if (activeStep === (steps.length - 1)) {
            // Call API
            console.log(formData);
        }
    }

    const handleBack = (e) => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    }

    const getButtonConfig = () => {
        return (
            <Grid container spacing={3} >
                <Grid item xs={12} sm={3}>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button variant="contained" color="primary" className={styles.registerButton} fullWidth disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Button type={"submit"} variant="contained" color="primary" className={styles.registerButton} fullWidth>{activeStep === (steps.length - 1) ? 'Register' : 'Next'}</Button>
                </Grid>
            </Grid>
        );
    }

    return (
        <>
            <Head>
                <title>Surplusss Register</title>
                <meta name="description" content="Surplusss registration" />
            </Head>
            <Container component="main" maxWidth="lg">
                <div className={styles.registerBaseContainer}>
                    <Link href="/">
                        <h1>{language.app_name}</h1>
                    </Link>
                    <Stepper activeStep={activeStep} style={{ width: '100%' }}>
                        {steps.map((step, index) => {
                            return (
                                <Step key={index}>
                                    <StepLabel>{step.name}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {
                        activeStep === 0 &&
                        <RegistrationPage1 handleSubmit={handleSubmit}>
                            {getButtonConfig()}
                        </RegistrationPage1>
                    }
                    {
                        activeStep === 1 &&
                        <RegistrationPage2 handleSubmit={handleSubmit}>
                            {getButtonConfig()}
                        </RegistrationPage2>
                    }
                    <Link href="/login" variant="body2">
                        Back to Login
                    </Link>
                    <Link href="/forgot-password" variant="body2">
                        Forgot Password
                    </Link>
                </div>
            </Container>
        </>
    )
}

export default Register
