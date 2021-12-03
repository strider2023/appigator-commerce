import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../common/providers/LanguageContext';
import { Grid, TextField } from "@material-ui/core";

function RegistrationPage2(props) {
    const language = useContext(LanguageContext);
    const [values, setValues] = useState({
        building: '',
        street: '',
        landmark: '',
        state: '',
        country: '',
        pincode: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <form autoComplete="off" onSubmit={(e) => props.handleSubmit(e, values)}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField required id="building" label="Building" onChange={handleChange('building')} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="landmark" label="Landmark" onChange={handleChange('landmark')} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="street" label="Street" onChange={handleChange('street')} fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="state" label="State" type="tel" onChange={handleChange('state')} fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="country" label="Country" type="email" onChange={handleChange('country')} fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="pincode" label="Pincode" type="email" onChange={handleChange('pincode')} fullWidth />
                </Grid>
            </Grid>
            {props.children}
        </form>
    )
}

export default RegistrationPage2
