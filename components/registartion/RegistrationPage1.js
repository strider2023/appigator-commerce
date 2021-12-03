import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../common/providers/LanguageContext';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, TextField, Select, MenuItem } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function RegistrationPage1(props) {
    const language = useContext(LanguageContext);
    const [values, setValues] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
        password: '',
        reenter_password: '',
        userType: '',
        phone: '',
        email: '',
        showPassword: false,
        showReEnterPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowReEnterPassword = () => {
        setValues({ ...values, showReEnterPassword: !values.showReEnterPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <form autoComplete="off" onSubmit={(e) => props.handleSubmit(e, values)}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField required id="firstname" label="First Name" onChange={handleChange('firstname')} fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField id="middlename" label="Middle Name" onChange={handleChange('middlename')} fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="lastname" label="Last Name" onChange={handleChange('lastname')} fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="phone" label="Phone" type="tel" onChange={handleChange('phone')} fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField required id="email" label="Email" type="email" onChange={handleChange('email')} fullWidth />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel shrink id="userTypeLabel">Type</InputLabel>
                        <Select
                            labelId="userTypeLabel"
                            id="userType"
                            value={values.userType}
                            onChange={handleChange('userType')}
                            labelWidth={40}>
                            <MenuItem value={'seller'}>Seller</MenuItem>
                            <MenuItem value={'buyer'}>Buyer</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="re-enter-password">Re-Enter Password</InputLabel>
                        <OutlinedInput
                            id="re-enter-password"
                            type={values.showReEnterPassword ? 'text' : 'password'}
                            value={values.reenter_password}
                            onChange={handleChange('reenter_password')}
                            labelWidth={140}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle reenter_password visibility"
                                        onClick={handleClickShowReEnterPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showReEnterPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
            </Grid>
            {props.children}
        </form>
    )
}

export default RegistrationPage1
