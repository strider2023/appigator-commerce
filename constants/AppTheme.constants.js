import { createTheme } from '@mui/material';

export const APP_THEME = createTheme({
    palette: {
        primary: {
            main: '#48a999',
        },
        secondary: {
            main: '#00796b',
        }
    },
    props: {
        MuiTextField: {
            variant: 'outlined'
        }
    }
});